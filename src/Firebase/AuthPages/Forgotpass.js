import React from 'react';

const Forgotpass = () => {
    return (
        <div className='bg-slate-600 dark:bg-gray-800 dark:text-gray-100'>
            <div className='px-4 py-16 m-auto sm:max-w-xl md:max-w-full lg:w-4/5'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 dark:bg-gray-900 dark:text-gray-100 m-auto">
                    <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
                    <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label className="block text-gray-400">Email Address</label>
                            <input type="text" name="username" id="username" placeholder="Type here Sign-up Email Address" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-white dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm bg-orange-300 text-black dark:text-gray-900 dark:bg-violet-400 font-bold">Forgot Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forgotpass;