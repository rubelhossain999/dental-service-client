import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewTable = ({ review }) => {
    return (
        <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                <td className="p-3 lg:w-40">
                    <span><img src={review.image} alt='img'/></span>
                </td>
                <td className="p-3">
                    <p>{review.review}</p>
                </td>
                <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="dark:text-gray-400">Friday</p>
                </td>
                <td className="p-3">
                    <p>$15,792</p>
                </td>
                <td className="p-3 flex cursor-pointer text-sm">
                    <p className='text-red-600'><FontAwesomeIcon icon={faTrash} /> </p>
                    <p className='px-5'><FontAwesomeIcon icon={faEdit} /> </p>
                </td>
            </tr>
        </tbody>
    );
};

export default ReviewTable;