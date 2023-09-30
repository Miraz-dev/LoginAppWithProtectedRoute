// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo);
    return (
        <div className="grid place-content-center">
            <h2 className="text-2xl">Home</h2>
        </div>
    );
};

export default Home;