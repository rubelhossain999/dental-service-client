import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Components/hooks/useTitle';
import { AuthContext } from '../../ContextAPI/AuthContextdata';
import SocialAuth from './SocialAuth';

const Login = () => {
    const {user, userLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigator = useNavigate();
    useTitle('Login')

    const from = location.state?.from?.pathname || '/';
    const handlelogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;

                // Get JWT Token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify()

                })


                console.log(user);
                form.reset();
                setError('');
                toast.success("User Login is Success!!");
                navigator(from, {replace: true});
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    return (
        <div className='bg-slate-600 dark:bg-gray-800 dark:text-gray-100'>
            <div className='px-4 py-16 m-auto sm:max-w-xl md:max-w-full lg:w-4/5'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 dark:bg-gray-900 dark:text-gray-100 m-auto">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit={handlelogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label className="block text-black">Username</label>
                            <input type="email" name="email" id="username" placeholder="Type Registration Mail" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-white text-black focus:dark:border-violet-400" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block text-black">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-white text-black focus:dark:border-violet-400" required />
                            <div className="flex justify-end text-xs dark:text-gray-400">
                                <Link rel="noopener noreferrer" to="/forgotpass">Forgot Password?</Link>
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm bg-orange-300 text-black dark:text-gray-900 dark:bg-violet-400 font-bold">LOGIN IN</button>
                    </form>
                        <div className='text-red-500'>{error}</div>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-white dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-white dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <SocialAuth></SocialAuth>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                        <Link rel="noopener noreferrer" to="/signup" className="underline dark:text-gray-100"> Registration</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;