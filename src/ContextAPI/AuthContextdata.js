import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthContextdata = ({ children }) => {

    const [datas, setData] = useState(); 



    /// Data load From Mongodb for the UI
    useEffect(()=>{
        const url = "http://localhost:5000/users";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
        
    }, []);


    const authINFO = { datas }
    return (
        <AuthContext.Provider value={authINFO}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextdata;