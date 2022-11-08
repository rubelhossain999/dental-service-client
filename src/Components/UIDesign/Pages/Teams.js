import React from 'react';

const Teams = () => {
    return (
        <div className="px-4 py-16 mx-auto text-black sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                <p className="max-w-lg mb-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                   Dental Teams
                </p>
                <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium.
                </p>
            </div>
            <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://i.ibb.co/YyFvxJ2/Shweta.png"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold">Dr. Satu Roy</p>
                        <p className="text-sm text-gray-800">CEO and Founder</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold">Dr. Marta Clermont</p>
                        <p className="text-sm text-gray-800">Assisting Doctor</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold">Dr. Anthony Geek</p>
                        <p className="text-sm text-gray-800">Patient Caring</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold">Dr. Alice Melbourne</p>
                        <p className="text-sm text-gray-800">Specialist in dental medicine</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold">Dr. Martin Garix</p>
                        <p className="text-sm text-gray-800">Tooth putting expert</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold">Dr. Andrew Larkin</p>
                        <p className="text-sm text-gray-800">Cleaning Specialist</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold">Sophie Denmo</p>
                        <p className="text-sm text-gray-800">The nurse</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold">Benedict Caro</p>
                        <p className="text-sm text-gray-800">The cleaner</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;