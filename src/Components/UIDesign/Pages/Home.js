import React, { useContext } from 'react';
import { AuthContext } from '../../../ContextAPI/AuthContextdata';

const Home = () => {
    const {info} = useContext(AuthContext);
    return (
        <div>
            <h1 className='font-bold text-6xl text-center'>Hello Bangladesh:{info.displayName}</h1>
        </div>
    );
};

export default Home;