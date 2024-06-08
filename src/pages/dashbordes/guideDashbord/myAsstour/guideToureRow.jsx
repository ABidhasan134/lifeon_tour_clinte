import React from 'react'

import Swal from 'sweetalert2'
import useAxiousSequer from '../../../../hooks/useAxiousSequer';
import useBookings from '../../../../hooks/useBookings';

const GuideToureRow = ({tour,index,refetch}) => {
    const axiosSequer=useAxiousSequer();
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; 
    };
 

    const handelStatus=(id,status)=>{
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You updated your trip",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSequer.patch(`/mybooking/${id}`,{status: status})
                .then((result)=>{
                    refetch();
                    // console.log(result.data.modifiedCount);
                    if(result.data.modifiedCount>0){
                        Swal.fire({
                            title: `${status}`,
                            text: `you ${status} successfully`,
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
            <td>{tour?.tourist_name}</td>
            <td>{formatDate(tour?.booking_date)}</td>
            <td>{tour?.tour_price}</td>
            <td>{tour?.status}</td>
            <td><button className='btn' onClick={()=>handelStatus(tour._id,'rejected')}>Rejected</button> </td>
            <td><button className='btn' onClick={()=>handelStatus(tour._id,'accepted')}>Accept</button></td>
        </tr>
  )
}

export default GuideToureRow
