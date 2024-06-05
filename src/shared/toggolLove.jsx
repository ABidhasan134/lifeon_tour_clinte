import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import useAxiousSequer from '../hooks/useAxiousSequer';
const ToggolLove = ({ourPackage}) => {
    // console.log(ourPackage)
    const [toggel,setToggle]=useState(false)
    const axiosSequer=useAxiousSequer();
    const handelMakeWishList=()=>{
        axiosSequer.post('/wishlist')
        .then((res)=>{
            console.log(res.data);
        })
        setToggle(false);
    }
    const handelDeletWishList=()=>{
        setToggle(true);
    }
  return (
    <div>
        {
            toggel
            ?<FaHeart className='text-red-500' onClick={handelMakeWishList}></FaHeart>
            :<CiHeart onClick={handelDeletWishList}></CiHeart>
        }
    </div>
  )
}

export default ToggolLove
