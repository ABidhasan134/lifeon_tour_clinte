import React, { useContext, useEffect, useState } from 'react'
import useBookings from '../../../../hooks/useBookings';
import BookingRow from './bookingRow';
import { AuthContext } from '../../../../context/authProvider';
import { Helmet } from 'react-helmet-async';
import Confetti from 'react-dom-confetti';


const BookingTable = () => {
    const {user}=useContext(AuthContext)
    const [bookings,isLoading,refetch]=useBookings(user.email);
    // console.log(bookings)
    const [confettiActive, setConfettiActive] = useState(false);

    useEffect(() => {
      if (bookings.length > 3) {
        setConfettiActive(true);
        setTimeout(() => setConfettiActive(false), 3000); // Reset confetti after 3 seconds
      }
    }, [bookings]);
    const config = {
      angle: 90,
      spread: 360,
      startVelocity: "58",
      elementCount: 70,
      dragFriction: 0.12,
      duration: 3000,
      stagger: 3,
      width: "10px",
      height: "10px",
      perspective: "500px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };
  return (
    <>
    {bookings.length > 3 && (
        <div className="confetti-wrapper">
          <Confetti active={confettiActive} config={config} />
          <div className="congrats-message">
            Congratulations! You get a 50% discount!
          </div>
          <button className="apply-button">
            Apply Discount
          </button>
        </div>
      )}
    <table className="table  text-2xl">
      <Helmet><title>My Bookings</title></Helmet>
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
    </>
  )
}

export default BookingTable
