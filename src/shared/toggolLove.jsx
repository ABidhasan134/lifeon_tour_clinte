import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import useAxiousSequer from '../hooks/useAxiousSequer';
import Swal from 'sweetalert2'

const ToggolLove = ({ ourPackage }) => {
    const [toggle, setToggle] = useState(false);
    const axiosSequer = useAxiousSequer();

    const handleMakeWishList = async () => {
        
            const res = await axiosSequer.post('/wishlist', ourPackage);
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thanks for adding this trip",
                    showConfirmButton: false,
                    timer: 1500
                });
                setToggle(true);
            }
            
        };
        
        const handleDeleteWishList = async () => {
        setToggle(false);
      
    };

    return (
        <div>
            {toggle
                ? <FaHeart className='text-red-500' onClick={handleDeleteWishList} />
                : <CiHeart onClick={handleMakeWishList} />}
        </div>
    );
};

export default ToggolLove;
