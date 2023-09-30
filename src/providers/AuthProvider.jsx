import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log("Observing the user inside the useEffect of AuthProvider.jsx: ", currentUser);
        })

        return () => {
            unSubscribe();
        }
        
    }, [])

    const authInfo = { user, createUser, signInUser, logOut, loading, signInWithGoogle };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};

/**
 * 1. Create context
 * 2. Set Provider with value
 * 3. Now go to the main.jsx (<app /> or <Router />) and wrap it up with AuthProvider.jsx >> So now, the parent 
 * component becomes the AuthProvider.jsx and we know that using {children} prop we can acccess everything of the children
 * from the parent component. So, pass this {children} inside <Authcontext.Provider>. This will allow "value" to be accessible
 * global wise.
 *    
 */