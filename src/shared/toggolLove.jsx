import React, { useContext, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import useAxiousSequer from '../hooks/useAxiousSequer';
import Swal from 'sweetalert2'
import { AuthContext } from '../context/authProvider';

const ToggolLove = ({ ourPackage }) => {
    const [toggle, setToggle] = useState(false);
    const axiosSequer = useAxiousSequer();
    const {user}=useContext(AuthContext);

    const handleMakeWishList = async () => {
            const newWish = {
                title: ourPackage.title,
                short_description: ourPackage.short_description,
                trip_start_time: ourPackage.trip_start_time,
                guide_name:ourPackage.guide_name,
                price:ourPackage.price,
                long_description: ourPackage.long_description,
                image: ourPackage.image,
                user_email:user.email                       
            }
            const res = await axiosSequer.post('/wishlist', newWish);
            // console.log(res.data);
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
