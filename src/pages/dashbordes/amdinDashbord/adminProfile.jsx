import React, { useContext } from 'react'
import Bakground from '../../../../public/img/cool-background.png'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../context/authProvider';
import useAxiousSequer from '../../../hooks/useAxiousSequer';
import { Helmet } from 'react-helmet-async';
const AdminProfile = () => {
  const {user}=useContext(AuthContext)
  const axiousPublic=useAxiousSequer();
  const { data: admindetails = [] } = useQuery({
    queryKey: ["admindetails",user.email],
    queryFn: async () => {
      const res = await axiousPublic.get(`/admindetails/${user.email}`);
      return res.data;
    },
  });
  // console.log(admindetails)
  return (
    <div className="container mx-auto text-black">
      <Helmet><title>{user.displayName} profile</title></Helmet>
       <div
        className="hero mt-2 min-h-[80vh] flex justify-center  gap-10"
        style={{ backgroundImage: `url(${Bakground})` }}
      >
        <div>
          {admindetails.map((guide) => {
            return (
              <div className="hero-content flex-col lg:flex-row">
                <div>
                  <h1 className="text-5xl font-bold">{user.displayName}</h1>
                  <p>Email: {guide.email}</p>
                  <p>Experience: {guide.experience}</p>
                  <p>Average Rating: {guide.average_rating}</p>
                  <p>price Range: {guide.price_range}</p>
                  <p>status: {guide.status}</p>
                  <p>City: {guide.city}</p>
                  <p className="">
                    Guide id: {guide._id?.slice(0, 5) || "365aj"}
                  </p>
                  <p className="text-xl font-semibold">
                    phone number: {guide?.phoneNumber || "71***550100"}
                  </p>
                  <p className="">Availability: {guide.availability}</p>
                  <article>
                    {user.displayName} is a spirited adventurer with an
                    insatiable passion for exploring the world. With a well-worn
                    backpack and a heart full of wanderlust, {user.displayName}{" "}
                    thrives on the thrill of discovering new destinations. Each
                    journey is a chance to immerse in diverse cultures, savor
                    exotic cuisines, and connect with people from all walks of
                    life. {user.displayName}'s travels are marked by spontaneous
                    detours and unplanned adventures, whether it's trekking
                    through dense rainforests, wandering ancient cobblestone
                    streets, or basking on pristine beaches. The stories and
                    experiences collected along the way are a testament to{" "}
                    {user.displayName}'s love for travel, driving a perpetual
                    quest to see and understand the world in all its vibrant
                    beauty. Through travel, Alex finds joy, inspiration, and a
                    profound sense of connection to the global community.
                  </article>
                  <h1 className="text-3xl font-bold">Language:</h1>
                  <ul>
                    <li>{guide.languages[0]}</li>
                    <li>{guide.languages[1]}</li>
                    <li>{guide?.languages[2]}</li>
                  </ul>
                  <h1 className="text-3xl font-bold">Specialties:</h1>
                  <ul>
                    <li>{guide.specialties[0]}</li>
                    <li>{guide.specialties[1]}</li>
                    <li>{guide?.specialties[2]}</li>
                  </ul>
                </div>

                <img src={user.photoURL} className="max-w-xl rounded-lg " />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default AdminProfile
