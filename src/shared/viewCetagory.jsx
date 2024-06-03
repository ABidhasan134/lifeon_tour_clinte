import React from 'react'
import { useLoaderData } from 'react-router-dom'
import useAxiousPublic from '../hooks/useAxiousPublic';
import { useQuery } from '@tanstack/react-query';

const ViewCetagory = () => {
    const id=useLoaderData();
    console.log(id)
    const axiousPublic=useAxiousPublic();
    const {data: singelDetails=[]}=useQuery({
        queryKey: 'packages',
        queryFn: async()=>{
            const res=await axiousPublic.get(`/alltourdetail/${id}`);
            return res.data
        }
      })
      console.log(singelDetails);
  return (
    <div className="hero min-h-[400px] bg-gray-600 m-4 rounded-md">
    <div className="hero-content flex-col lg:flex-row items-center">
      <img src={singelDetails.image} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">{singelDetails.tour_type}</h1>
        <p className="py-6">{singelDetails.description}</p>
        <h1 className="text-2xl text-sky-500 font-bold my-3">Locations of trip</h1>
        {/* <button className="btn btn-primary">Get Started</button> */}
        <div className="flex md:gap-2 gap-1 justify-evenly">
              <p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-gray-800 rounded-3xl text-sky-600">{singelDetails.popular_destinations[0]}</p>
              <p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-gray-800 rounded-3xl text-sky-600">{singelDetails.popular_destinations[1]}</p>
              {singelDetails.popular_destinations[2]?<p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-gray-800 rounded-3xl text-sky-600">{singelDetails.popular_destinations[2]}</p>:""}
              {singelDetails.popular_destinations[3]?<p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-gray-800 rounded-3xl text-sky-600">{singelDetails.popular_destinations[3]}</p>:""}
             
            </div>
      </div>
    </div>
  </div>
  )
}

export default ViewCetagory
