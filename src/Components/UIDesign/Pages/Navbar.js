import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/">Home</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/reviews">My Review</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/blog">Blog</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/courses">LogOut</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/faq">Login</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/faq">Sign up</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/profile">Services</Link></li>
        </>
    );
};

export default Navbar;