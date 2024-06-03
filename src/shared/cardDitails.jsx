import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


import { IoMdPricetags, IoMdTime } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbStarsFilled } from "react-icons/tb";
import usePackages from "../hooks/usePackages";

const CardDetails = () => {
  const id = useLoaderData();
  
  const [packages]=usePackages();

  const packagesItem = packages.find((craft) => craft._id == id); //we not chacking type
  if (!packagesItem) {
    return <div>No property found</div>;
  }
  // console.log(landProperty);
  return (
    <div className="container mx-auto">
      
      <p className=" text-center animate__animated animate__bounce mt-10">
        <span className="md:text-2xl text-xl font-bold text-center mt-3 ">
        enjoy Life with {packagesItem.tour_type}  
        </span>
      </p>
      <div class="hero mt-24 bg-base-100 mb-10">
        <div class=" xl:flex xl:justify-evenly grid justify-center gap-20 ">
          <img
            src={packagesItem.image}
            class=" rounded-lg shadow-2xl xl:max-w-3xl w-auto "
          />
          <div>
            <h1 class="md:text-5xl lg:text-start text-center font-bold">
              {packagesItem.title}
            </h1>
            <p class="py-6 px-2">{packagesItem.short_description}</p>
            <h1 className="text-2xl text-sky-500 font-bold my-3">Know more:</h1>
            <p class="lg:py-6 py-3 px-2">{packagesItem.long_description}</p>
            <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
            <h1 className="text-2xl text-sky-500 font-bold my-3">Facilities:</h1>
            <div className="flex md:gap-2 gap-1 justify-evenly">
              <p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{packagesItem.facilities[0]}</p>
              <p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{packagesItem.facilities[1]}</p>
              {packagesItem.facilities[2]?<p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{packagesItem.facilities[2]}</p>:""}
              {packagesItem.facilities[3]?<p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{packagesItem.facilities[3]}</p>:""}
             
            </div>
            <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />

            {/* reant and status */}
            <h1 className="text-2xl text-sky-500 font-bold my-3">
              Price/time:
            </h1>
            {/* location and segment */}
            <div className="flex md:justify-between justify-evenly">
              <div className="flex items-center md:gap-2 text-xl mx-3">
                <IoMdTime></IoMdTime>
                <p>{packagesItem.processing_time} days</p>
              </div>
              <div className="flex items-center gap-2 text-xl mx-3">
                <TbStarsFilled></TbStarsFilled>
                <p>{packagesItem.rating}</p>
              </div>
            </div>
            {/* price and segment end */}
            <div className="flex md:justify-between justify-evenly items-center">
              <div className="flex items-center gap-2 text-xl mt-5">
                <RiMoneyDollarCircleFill className="text-green-600"></RiMoneyDollarCircleFill>
                <p>{packagesItem.price}</p>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <IoMdPricetags></IoMdPricetags>
                <p>{packagesItem.stock_status}</p>
              </div>
            </div>
            <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
            <div className="flex md:justify-between justify-evenly">
              <div className="flex items-center justify-between gap-2 text-xl mx-3">
                <p>{packagesItem.user_name}</p>
                <p>{packagesItem.user_email}</p>
                <button className="btn bg-green-400 hover:bg-green-700 hover:text-white">
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails; // Added semicolon
