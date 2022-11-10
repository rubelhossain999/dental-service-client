import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../ContextAPI/AuthContextdata';
import useTitle from '../../hooks/useTitle';
import ReviewTable from './ReviewTable';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState({});
    useTitle('Reviews')

    useEffect(() => {
        fetch(`https://dental-service-server.vercel.app/reviews?email=${user.email}`, {

        headers: {
            authorization: `Bearer ${localStorage.getItem('DentalToken')}`
        }

        })
            .then(res => res.json())
            .then(data => {

                console.log("object", data);
                //setReview(data);
            })
    }, [user?.email]);

    return (
        <div className='lg:w-4/5 m-auto mt-10 mb-10'>
            {review?.length ?
                <>
                    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                        <div className='bg-slate-500 mb-10 p-5 rounded-lg flex text-center text-stone-50 font-bold text-3xl'>
                            <p>You Have Reviews Items</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs">
                                <thead className="dark:bg-gray-700">
                                    <tr className="text-left">
                                        <th className="p-3">Title</th>
                                        <th className="p-3">Rating</th>
                                        <th className="p-3">Service Title</th>
                                        <th className="p-3">Review Comment</th>
                                        <th className="p-3">Time</th>
                                        <th className="p-3">Status</th>
                                    </tr>
                                </thead>
                                {
                                    review?.map(review => <ReviewTable review={review} key={review._id}></ReviewTable>)
                                }

                            </table>
                        </div>
                    </div>

                </>
                :
                <>
                    <div className='bg-slate-500 mb-10 p-5 rounded-lg flex text-center text-stone-50 font-bold text-3xl'>
                        <p>You Have Reviews Items</p>
                    </div>
                    <p className='text-3xl text-center text-black font-bold mt-10'>You don't have any reviews at the moment</p>
                </>

            }
        </div>
    );
};

export default Reviews;