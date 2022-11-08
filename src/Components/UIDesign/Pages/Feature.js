import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div className="px-4 py-16 text-black bg-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    Our Service Criteria
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Each of our services is very reasonable. We are always dedicated to serve the people and our service will impress you. Please check the details.
                </p>
            </div>
            <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">Have 4 doctors</h6>
                        <p className="text-sm text-gray-900">
                            We are total four doctors, each one of us is completing PhD in Dental, who have very good experience.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5"> 6 Service</h6>
                        <p className="text-sm text-gray-900">
                            We have a total of 6 services. You can easily take this kind of service if you want, which can be very reasonable for you.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">
                            Health Insurance
                        </h6>
                        <p className="text-sm text-gray-900">
                            Our organization is included in health insurance. You can avail services from us using your monthly health insurance card if you want.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">Home Health Care</h6>
                        <p className="text-sm text-gray-900">
                            We are capable of home visits for any ailment due to emergencies. We provide such facilities very easily and at reasonable prices, which are yours. will be for
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;