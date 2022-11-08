import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextAPI/AuthContextdata';

const Logout = () => {
    const { userLogOut } = useContext(AuthContext);
    const navigator = useNavigate();

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                toast.success("LogOut Success!!")
                navigator('/')
             })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <li onClick={handleLogOut} className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link>Logout</Link></li>
        </div>
    );
};

export default Logout;