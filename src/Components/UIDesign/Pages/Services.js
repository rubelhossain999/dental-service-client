import React, { useContext } from 'react';
import { AuthContext } from '../../../ContextAPI/AuthContextdata';
import { Link } from 'react-router-dom';

const Services = () => {
    const { datas } = useContext(AuthContext);
    console.log(datas);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    datas?.map(datas => <p key={datas._id}>
                        <div className="overflow-hidden transition-shadow duration-300 bg-slate-200 rounded">
                            <a href="/" aria-label="Article">
                                <img
                                    src={datas.image}
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
                                    <p className="text-2xl font-bold leading-5">{datas.name}</p>
                                </a>
                                <p className="mb-4 text-gray-700">
                                    {datas.description.slice(0, 300) + '...' } <Link className="text-orange-600" to={`/users/${datas._id}`}>See More</Link>
                                </p>
                                <div className="flex space-x-4">
                                    <div className="mr-2">
                                        <button className='btn-warning px-2 py-1 font-medium uppercase rounded-md'>Details</button>
                                    </div>
                                    <div className="mr-2">
                                        <button className='btn-success px-2 py-1 rounded-md'>Price: {datas.price} USD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Services;