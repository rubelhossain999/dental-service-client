import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthContextdata';
import SocialAuth from './SocialAuth';

const Signup = () => {
    const {userRegistration} = useContext(AuthContext);
    const [error, setError] = useState();
    const navigator = useNavigate()

    const handleSignup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);


        userRegistration(email, password)
        .then(result => {
            form.reset();
            setError('');
            navigator('/login');
            toast.success('Please Verify your email address before login!!');
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })

    }
    return (
        <>
            <div className='bg-slate-600 dark:bg-gray-800 dark:text-gray-100'>
                <div className='px-4 py-16 m-auto sm:max-w-xl md:max-w-full lg:w-4/5'>
                    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 dark:bg-gray-900 dark:text-gray-100 m-auto">
                        <h1 className="text-2xl font-bold text-center">User Registration</h1>
                        <form onSubmit={handleSignup}  className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-1 text-sm">
                                <label className="block dark:text-gray-400">Username</label>
                                <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-slate-50 text-black focus:dark:border-violet-400" required />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label className="block dark:text-gray-400">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email Type" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-slate-50 text-black focus:dark:border-violet-400" required />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label className="block dark:text-gray-400">Photo URL</label>
                                <input type="text" name="photoURL" id="photo" placeholder="Your Photo URL" className="w-full px-4 py-3 rounded-md dark:bg-slate-50 text-black focus:dark:border-violet-400" required />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label className="block dark:text-gray-400">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:bg-slate-50 text-gray-700 focus:dark:border-violet-400" />
                                <div className="flex justify-end text-xs dark:text-gray-400">
                                    <Link rel="noopener noreferrer" to="/forgotpass">Forgot Password?</Link>
                                </div>
                            </div>
                            <button className="block w-full p-3 bg-orange-300 font-bold text-black text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Registration Here</button>
                            <div className='text-center text-red-600'>
                            <p>{error}</p>
                            </div>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 bg-white dark:bg-gray-700"></div>
                            <p className="px-3 text-sm dark:text-gray-400">Registration with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 bg-white dark:bg-gray-700"></div>
                        </div>
                        <SocialAuth></SocialAuth>
                        <p className="text-xs text-center sm:px-6 dark:text-gray-400">Do have an account?
                            <Link rel="noopener noreferrer" to="/login" className="underline dark:text-gray-100"> Login</Link>
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Signup;