import React from 'react'
import useBookings from '../../../../hooks/useBookings';
import BookingRow from './bookingRow';

const BookingTable = () => {
    const [bookings,isLoading,refetch]=useBookings();
    console.log(bookings)
  return (
    <table className="table  text-2xl">
      {/* head */}
      <thead className='text-2xl text-white'>
        <tr>
          <th></th>
          <th>Package Name</th>
          <th>Guide Name</th>
          <th>Date</th>
          <th>Price</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
      {
        bookings.map((item,index)=>{
          return  <BookingRow tour={item} key={item._id} index={index}></BookingRow>

        })
      }
      </tbody>
    </table>
  )
}

export default BookingTable
