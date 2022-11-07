import React from 'react';

const Hero = () => {
    return (
        <div className="relative">
            <img
                src="https://i.ibb.co/R7MPfy0/15799744919253.jpg"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-opacity-80 bg-black">
                <svg
                    className="absolute inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-3xl mb-12 xl:mb-0 xl:pr-16 xl:w-8/12">
                            <h2 className="max-w-3lg mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-9xl sm:leading-none">
                                Dr. Satu Roy
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                I am a professional dentist. Having been providing dental services to the American market for the past five years, I have real experience.
                            </p>
                            
                               <button className='btn border-none bg-cyan-700 font-medium text-base text-white'>My Service</button>
                        </div>
                        <div className="w-full max-w-full xl:px-8 xl:w-5/12">
                            <img src='https://i.ibb.co/KwvbdM1/rIGHT.png' alt='img'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;