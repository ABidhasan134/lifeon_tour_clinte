import React from 'react'
import useAxiousSequer from '../../../../hooks/useAxiousSequer';
import Swal from 'sweetalert2'


const BookingRow = ({ tour, index,refetch }) => {
    const axiosSequer=useAxiousSequer();
    
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; 
    };
    const handelDeletBooking=(id)=>{
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSequer.delete(`/mybooking/${id}`)
                .then((result)=>{
                    // console.log(result.data);
                    if(result.data.deletedCount){
                        refetch();
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                    }
                })         
            }
          });
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tour?.package_type || "Day tour"}</td>
            <td>{tour?.guide_name}</td>
            <td className='hidden md:table-cell'>{formatDate(tour?.booking_date)}</td>
            <td className='hidden md:table-cell'>{tour?.tour_price}</td>
            <td>{tour?.status}</td>
            <td>
                {tour.status === 'review' ? 
                    <button onClick={()=>handelDeletBooking(tour._id)} className='btn btn-warning hover:bg-red-500 hover:border-none'>Cancel</button> : 
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
