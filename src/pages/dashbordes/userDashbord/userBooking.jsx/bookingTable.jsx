import React, { useContext } from 'react'
import useBookings from '../../../../hooks/useBookings';
import BookingRow from './bookingRow';
import { AuthContext } from '../../../../context/authProvider';

const BookingTable = () => {
    const {user}=useContext(AuthContext)
    const [bookings,isLoading,refetch]=useBookings(user.email);
    // console.log(bookings)
  return (
    <table className="table  text-2xl">
      {/* head */}
      <thead className='text-2xl text-white'>
        <tr>
          <th></th>
          <th>Package Name</th>
          <th>Guide Name</th>
          <th className='hidden md:table-cell'>Date</th>
          <th className='hidden md:table-cell'>Price</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
      {
        bookings.map((item,index)=>{
          return  <BookingRow tour={item} key={item._id} index={index}refetch={refetch}></BookingRow>

        })
      }
      </tbody>
    </table>
  )
}

export default BookingTable
