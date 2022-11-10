import { faEdit, faStar, faStarHalfStroke, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ReviewTable = ({ review }) => {
    console.log(review);

    const[reviewUser, setReviewUser] = useState(review);
    

    /// Delete Review items
    const handleDeletereview = review => {
        const agree = window.confirm(`Are you Sure This Review Deleted!! ${review.name}`);
         if(agree){
             fetch(`http://localhost:5000/reviews/${review._id}`, {
                 method: 'DELETE'
             })
             .then(res => res.json())
             .then( data => {
                if(data.deletedCount > 0){
                    toast.success('Review Deleted Success!!');
                    const remainingUser = reviewUser.filter(usr => usr._id !== review._id);
                    setReviewUser(remainingUser);
                }
             })
         }
    }


    return (
        <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                <td className="p-3">
                    <p>{review.review}</p>
                </td>
                <td className="p-3 text-orange-400 text-sm">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                </td>
                <td className="p-3">
                    <p>{review.name}</p>
                </td>
                <td className="p-3">
                    <p>{review.description.slice(0, 50)} {"..."}</p>
                </td>
                <td className="p-3">
                    <p>12:15pm</p>
                </td>
                <td className="p-3 lg:flex cursor-pointer text-sm">
                    <Link to={`/reviewdetails/${review._id}`}>
                        <p className='px-5'><FontAwesomeIcon icon={faEdit} /> </p>
                    </Link>
                    <p onClick={() => handleDeletereview(review)} className='text-red-600'><FontAwesomeIcon icon={faTrash} /> </p>
                </td>
            </tr>
        </tbody>
    );
};

export default ReviewTable;