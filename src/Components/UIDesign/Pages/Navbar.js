import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../ContextAPI/AuthContextdata';
import Logout from './Logout';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        
        <>
        <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/">Home</Link></li>
            {user?.uid ?
                <>
                    <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/reviews">My Review</Link></li>
                    <Logout></Logout>
                    <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/profile">Dashboard</Link></li>
                </>

                :
                <>
                    <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/login">Login</Link></li>
                    <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/signup">Sign up</Link></li>
                </>
            }
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/blogs">Blog</Link></li>
            <li className='hover:bg-slate-500 hover:text-gray-50 hover:rounded-xl'><Link to="/services">Services</Link></li>
        </>
    );
};

export default Navbar;