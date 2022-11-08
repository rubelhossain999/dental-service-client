import React from 'react';

const Achievement = () => {
    return (
        <div className="px-4 text-black py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
                <div className="grid gap-8 lg:col-span-2">
                    <div>
                        <p className="mb-2 text-lg font-bold">Our achievement</p>
                        <p className="text-gray-700">
                            We have achieved a lot in the last four years. Hopefully we will achieve something better in the future by providing you good service. You will be with us and help us.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-lg font-bold">Future plans</p>
                        <p className="text-gray-700">
                            We want to make this company bigger in the future and increase the scope of free service. Because there are many helpless poor who cannot take services due to lack of money, we will provide them services.
                        </p>
                    </div>
                </div>
                <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
                    <div className="flex flex-col justify-between p-10">
                        <div>
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Our Visitor
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                Monthly: 300
                            </p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Our Doctors
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                6+
                            </p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Our Reviews
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                580+
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-10">
                        <div>
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Online Doctor
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                4
                            </p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Free Service
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                780+
                            </p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Service Type
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                6+
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;