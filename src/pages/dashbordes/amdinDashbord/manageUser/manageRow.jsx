import React from 'react'
import Swal from 'sweetalert2'
import useAxiousSequer from '../../../../hooks/useAxiousSequer';


const ManageRow = ({tour,index,refetch}) => {
    const axiosSequer=useAxiousSequer();
    
    
   const handelStatus=(id,role)=>{
    console.log(id,role);
    const info={
      role: role,
      status: 'ok'
    }
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSequer.patch(`/alluser/${id}`,info)
          .then((result)=>{
              console.log(result.data);
              if(result.data.modifiedCount){
                  refetch();
                  Swal.fire({
                          title: "Update",
                          text: `your ${tour.role} is update as ${role}`,
                          icon: "success"
                        });
              }
          })         
      }
    });

   }
    // console.log(tour)
  return (
    <tr>
            <th>{index + 1}</th>
            <td>{tour?.name || 'User'}</td>
            <td>{tour?.email}</td>
            <td>{tour?.role}</td>
            <td>{tour?.status}</td>
            <td><button className='btn' onClick={()=>handelStatus(tour._id,'guide')}>Make Guide</button> </td>
            <td><button className='btn' onClick={()=>handelStatus(tour._id,'admin')}>Make Admin</button></td>
        </tr>
  )
}

export default ManageRow
