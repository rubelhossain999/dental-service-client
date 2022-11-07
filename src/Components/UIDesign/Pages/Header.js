import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {

    return (
        <div className='bg-white sticky top-0 z-40 border-b-2'>
            <div className="navbar lg:w-4/5 m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Navbar></Navbar>
                        </ul>
                    </div>
                    <div className='w-44'><Link to='/'><img src='https://i.ibb.co/N2sYzF5/Logo.png' alt='logo' /></Link></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal cursor-pointer text-black font-medium text-base p-0">
                        <Navbar></Navbar>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;