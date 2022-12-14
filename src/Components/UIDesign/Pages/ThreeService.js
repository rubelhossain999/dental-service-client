import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ThreeService = () => {

    const [threedata, setThreedata] = useState();


    useEffect(() => {
        const url = "https://dental-service-server.vercel.app/threedata";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setThreedata(data);
            })
    }, []);

    return (
        <>
            <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                Our Service Criteria
            </h2>
            <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        threedata?.map(threedata => <div key={threedata._id}>
                            <div className="overflow-hidden transition-shadow duration-300 bg-slate-200 rounded">
                                <a href="/" aria-label="Article">
                                    <img
                                        src={threedata.image}
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
                                        <p className="text-2xl font-bold leading-5">{threedata.name}</p>
                                    </a>
                                    <p className="mb-4 text-gray-700">
                                        {threedata.description.slice(0, 400) + '...'} <Link className="text-orange-600" to={`/detailsService/${threedata._id}`}>See More</Link>
                                    </p>
                                    <div className="flex space-x-4">
                                        <div className="mr-2">
                                            <button className='btn-warning px-2 py-1 font-medium uppercase rounded-md'><Link to={`/detailsService/${threedata._id}`}>Details</Link></button>
                                        </div>
                                        <div className="mr-2">
                                            <button className='btn-success px-2 py-1 rounded-md'>Price: 45 USD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="text-center mt-10">
                    <Link to='/services'><button className='btn border-none bg-cyan-700 font-medium text-base text-white'>More Services</button></Link>
                </div>
            </div>
        </>
    );
};

export default ThreeService;