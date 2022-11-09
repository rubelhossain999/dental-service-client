import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthContextdata = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [datas, setData] = useState();


    // 1. User Registration
    const userRegistration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // 2. User Login Form
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // 3. User LogOut
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // 4. Google Login System
    const googleLoginPop = (provider) => {
        return signInWithPopup(auth, provider);
    }


    /// Data load From Mongodb for the UI
    useEffect(() => {
        const url = "https://dental-service-server.vercel.app/users";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })

    }, []);
    /// unsubscribe with loader
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside Auth State Change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, []);


    const authINFO = { user, loading, datas, userRegistration, userLogin, userLogOut, googleLoginPop }
    return (
        <AuthContext.Provider value={authINFO}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextdata;