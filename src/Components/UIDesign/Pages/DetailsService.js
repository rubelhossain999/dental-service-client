import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsService = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails);
    return (
        <div className='lg:w-9/12 m-auto mt-10 mb-10'>
            <div className='border-b-1 border-b-orange-300'>
                <h1 className='flex justify-center items-center text-4xl text-black font-bold'><span className='text-orange-400'>Service Title: </span>{serviceDetails.name}</h1>
                <div className='flex justify-center items-center mt-2'>
                    <img src={serviceDetails.image} alt='service'></img>
                </div>
                {/* /<span className='mt-2 text-black'>Post Time: 12: 39 PM</span> */}
                <p className='m-auto text-black lg:w-3/5 mt-5'>{serviceDetails.description}</p>
                <div className='flex justify-center items-center py-6 '>
                    <button className='btn bg-orange-400 border-none text-black hover:bg-slate-400'>Order Now</button>
                    <p className='text-2xl px-10 text-black font-bold'>Price: {serviceDetails.price}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsService;