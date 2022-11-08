import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/">Home</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/reviews">My Review</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/blogs">Blog</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/courses">Logout</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/login">Login</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/signup">Sign up</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/services">Services</Link></li>
        </>
    );
};

export default Navbar;