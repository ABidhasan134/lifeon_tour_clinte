import React, { useEffect } from "react";
import { IoMdPricetags } from "react-icons/io";

import { Link } from "react-router-dom";
import { MdOutlineTour } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FcMoneyTransfer } from "react-icons/fc";
import { TbCategory } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";

const CardsItems = ({ ourPackage }) => {

  // console.log(land._id);
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="card card-compact w-auto bg-base-100 shadow-sm border-2">
        <figure className="lg:h-96 md:h-72 h-48 p-2">
          <img src={ourPackage.image} alt="Photo of property" />
         
        </figure>

        <div className="card-body">
          <h2 className="card-title items-center">{ourPackage.title} <button className="text-2xl"><CiHeart></CiHeart></button></h2>
          <p>{ourPackage.short_description}</p>
          <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
          {/* location and segment */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-xl">
              <MdOutlineTour></MdOutlineTour>
              <p>{ourPackage.trip_start_time}</p>
            </div>
            <div className="flex items-center  text-xl gap-1">
              <CiLogout></CiLogout>
              <p>{ourPackage.trip_end_time}</p>
            </div>
          </div>
          {/* location and segment end */}
          {/* price and status */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-xl">
             <FcMoneyTransfer></FcMoneyTransfer>
              <p>{ourPackage.price}</p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <TbCategory></TbCategory>
              <p>{ourPackage.tour_type}</p>
            </div>
          </div>
          <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
          {/* price and status end */}
          
          <Link
            to={`/details/${ourPackage._id}`}
            className="btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white"
          >
            View Ditails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsItems;
