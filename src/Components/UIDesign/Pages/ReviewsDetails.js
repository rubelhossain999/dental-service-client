import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ReviewsDetails = () => {
    const reviewupdate = useLoaderData();

    useTitle('Review Detail')
    const [updateReview, setUpdateReview] = useState(reviewupdate);

    const handleReviewUpdate = event => {
        event.preventDefault();

        fetch(`https://dental-service-server.vercel.app/reviews/${reviewupdate._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Review Update is Success!!');
                }
                console.log(data);
            })

    }

    const handleUpdateBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newservice = { ...updateReview };
        newservice[field] = value;
        setUpdateReview(newservice);

    }

    return (
        <div className='p-2'>
            <div className="sm:mt-0 lg:w-9/12 m-auto">
                <div className="md:grid md:grid-cols-3 lg:grid-cols-2">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-2xl pt-3 pb-5 font-medium leading-6 text-black">Update user Review: <samp className='text-amber-600'>{reviewupdate.review}</samp></h3>
                        </div>
                    </div>
                    <div className="md:col-span-2 md:mt-0">
                        <form onSubmit={handleReviewUpdate}>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-slate-300 px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Your Name</label>
                                                <input onChange={handleUpdateBlur} type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" defaultValue={reviewupdate.name} required />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Email</label>
                                                <input onChange={handleUpdateBlur} type="text" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" defaultValue={reviewupdate.email} readOnly required />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Description</label>
                                                <textarea onChange={handleUpdateBlur} type="text" name="description" id="description" placeholder="Description" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" defaultValue={reviewupdate.description} required />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Picture URL</label>
                                                <input onChange={handleUpdateBlur} type="text" name="image" id="image" placeholder="Service Picture" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" defaultValue={reviewupdate.image} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Update Review
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

export default ReviewsDetails;