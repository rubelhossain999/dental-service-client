import React, { useState } from 'react';

const AddService = () => {
    const [service, setService] = useState();

    const handleAddservice= event => {
        event.preventDefault();
        console.log(service);

        fetch('')
    }

    const handleServiceBluer = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newservice = {...service};
        newservice[field] = value;
        setService(newservice);

    }


    return (
        <div className='bg-black lg:pt-12 pb-12'>
            <div className="lg:mt-10 sm:mt-0 lg:w-9/12 m-auto">
                <div className="md:grid md:grid-cols-3 lg:grid-cols-2  md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-2xl pt-3 font-medium leading-6 text-white">Add Dental Service</h3>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form onSubmit={handleAddservice}>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Title</label>
                                                <input onBlur={handleServiceBluer} type="text" name="name" id="username" placeholder="Service Title" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" required />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Description</label>
                                                <textarea onBlur={handleServiceBluer} type="text" name="description" id="username" placeholder="Service Description" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" required />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Price</label>
                                                <input onBlur={handleServiceBluer} type="text" name="price" id="username" placeholder="Service Price" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" required />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Picture URL</label>
                                                <input onBlur={handleServiceBluer} type="text" name="price" id="username" placeholder="Service Picture" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Submit Service
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;