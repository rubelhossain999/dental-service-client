import React from 'react';

const ThreeService = () => {
    return (
        <>
            <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                Our Service Criteria
            </h2>
            <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-slate-200 rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5 p-2">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                13 Jul 2020
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">Diving to the deep</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex space-x-4">
                                <div className="mr-2">
                                   <button className='btn-warning px-2 py-1 font-medium uppercase rounded-md'>Details</button>
                                </div>
                                <div className="mr-2">
                                   <button className='btn-success px-2 py-1 rounded-md'>Price: 45 USD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThreeService;