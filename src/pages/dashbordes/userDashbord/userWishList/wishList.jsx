import React from 'react'
import WishRowList from './wishRowList'
import useWishList from '../../../../hooks/useWishList'
import { Helmet } from 'react-helmet-async';

const WishList = () => {
    const [wishlist,isLoading,refetch]=useWishList();
    console.log(wishlist)
  return (
    <div className="overflow-x-auto my-16">
      <Helmet><title>My Wish's</title></Helmet>
  <table className="table  text-2xl">
    {/* head */}
    <thead className='text-2xl text-white'>
      <tr>
        <th></th>
        <th>Package</th>
        <th>Guide</th>
        <th>Start</th>
        <th>price(usd)</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 2 */}
      {
        wishlist.map((item,index)=>{

            return <WishRowList wish={item} index={index} key={item._id} refetch={refetch}></WishRowList>
        })
      }
    </tbody>
  </table>
</div>
  )
}

export default WishList
