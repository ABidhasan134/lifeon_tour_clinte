import React from 'react'

const BookingRow = ({ tour, index }) => {
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; 
    };
    const handelDeletBooking=()=>{
        
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tour?.package_type || "Day tour"}</td>
            <td>{tour?.guide_name}</td>
            <td>{formatDate(tour?.booking_date)}</td>
            <td>{tour?.tour_price}</td>
            <td>{tour?.status}</td>
            <td>
                {tour.status === 'review' ? 
                    <button onClick={handelDeletBooking} className='btn btn-warning hover:bg-red-500 hover:border-none'>Cancel</button> : 
                    <button className='btn' disabled>Cancel</button>
                }
            </td>
            <td>
                {tour.status === 'accepted' ? 
                    <button className='btn'>Pay</button> : 
                    <button className='btn text-white' disabled>Pay</button>
                }
            </td>
        </tr>
    )
}

export default BookingRow
