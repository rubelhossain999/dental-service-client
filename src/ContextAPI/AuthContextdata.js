import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthContextdata = ({ children }) => {

    const info = { displayName: "Rubel Hossain" }

    const authINFO = { info }

    return (
        <AuthContext.Provider value={authINFO}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextdata;