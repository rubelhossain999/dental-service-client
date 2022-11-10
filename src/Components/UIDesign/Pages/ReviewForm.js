import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../ContextAPI/AuthContextdata';

const ReviewForm = ({ servicetitle }) => {
    const {_id} = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReviewadded = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || "Unregistered";
        const description = form.description.value;
        const image = form.image.value;

        const review = {
            reviewID: _id,
            review: servicetitle,
            name,
            email,
            image,
            description
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Review add is Success!!");
                    form.reset('');
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='p-2'>
            <div className="sm:mt-0 lg:w-9/12 m-auto">
                <div className="md:grid md:grid-cols-3 lg:grid-cols-2">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-2xl pt-3 font-medium leading-6 text-white">Add Dental Service</h3>
                        </div>
                    </div>
                    <div className="md:col-span-2 md:mt-0">
                        <form onSubmit={handleReviewadded}>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-slate-300 px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Your Name</label>
                                                <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" defaultValue={user?.displayName} required />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Email</label>
                                                <input type="text" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" defaultValue={user?.email} readOnly required />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Description</label>
                                                <textarea type="text" name="description" id="description" placeholder="Description" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" required />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="space-y-1 text-sm">
                                                <label className="block text-black">Picture URL</label>
                                                <input type="text" name="image" id="image" placeholder="Service Picture" className="w-full px-4 py-3 rounded-md dark:border-gray-700text-black focus:dark:border-violet-400 outline-none" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Submit Review
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

export default ReviewForm;