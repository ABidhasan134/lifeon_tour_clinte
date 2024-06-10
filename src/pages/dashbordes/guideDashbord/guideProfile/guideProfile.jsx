import React, { useContext } from "react";
import { AuthContext } from "../../../../context/authProvider";
import useAxiousPublic from "../../../../hooks/useAxiousPublic";
import { useQuery } from "@tanstack/react-query";
import Bakground from "../../../../../public/img/cool-background.png";
import useAxiousSequer from "../../../../hooks/useAxiousSequer";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import TitleandSubtitle from '../../../../shared/titleandSubtitels'
import { Helmet } from "react-helmet-async";

const GuideProfile = () => {
  const axiousPublic = useAxiousPublic();
  const { user } = useContext(AuthContext);
  const axiousSequer = useAxiousSequer();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const { data: guidesSingle = {} } = useQuery({
    queryKey: "guidesSingle",
    queryFn: async () => {
      const res = await axiousPublic.get(`/guidesSingel/${user.email}`);
      return res.data;
    },
  });

  const onSubmit = (data) => {
    const newGuide = {
      name: data.name,
      experience: data.experience,
      availability: data.availability,
      price_range: data.price_range,
      bio: data.bio,
      image_url: data.image_url,
      email: data.email,
      specialties: ["Hiking", "Family tour"],
      languages: ["Bangla", "English"],
      city: data.city,
      average_rating: 3.5,
      status: "ok",
      role: "guide",
    };
    axiousSequer.put(`/guides/${data.email}`, newGuide).then((res) => {
      if (res.data.upsertedCount > 0 || res.data.modifiedCount) {
        reset();
        Swal.fire({
          title: "Request successful",
          text: "Your guide profile has been submitted.",
          icon: "success",
        });
      } else if (res.data.matchedCount > 0 && res.data.modifiedCount === 0) {
        reset();
        Swal.fire({
          title: "Request successful",
          text: "You already requested for Guide.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="container mx-auto text-black">
      <Helmet><title>{user.displayName} profile</title></Helmet>
      <div
        className="hero mt-2 min-h-[80vh] flex justify-center gap-10"
        style={{ backgroundImage: `url(${Bakground})` }}
      >
        <div>
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <h1 className="text-5xl font-bold">{user.displayName}</h1>
              <p>Email: {guidesSingle.email || ''}</p>
              <p>Experience: {guidesSingle.experience || ''}</p>
              <p>Average Rating: {guidesSingle.average_rating || ''}</p>
              <p>Price Range: {guidesSingle.price_range || ''}</p>
              <p>Status: {guidesSingle.status || ''}</p>
              <p>City: {guidesSingle.city || ''}</p>
              <p className="">
                Guide ID: {guidesSingle._id?.slice(0, 5) || "365aj"}
              </p>
              <p className="text-xl font-semibold">
                Phone Number: {guidesSingle.phoneNumber || "71***550100"}
              </p>
              <p className="">Availability: {guidesSingle.availability || ''}</p>
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
                beauty. Through travel, {user.displayName} finds joy,
                inspiration, and a profound sense of connection to the global
                community.
              </article>
              <h1 className="text-3xl font-bold">Languages:</h1>
              <ul>
                {guidesSingle.languages?.map((language, index) => (
                  <li key={index}>{language}</li>
                )) || ''}
              </ul>
              <h1 className="text-3xl font-bold">Specialties:</h1>
              <ul>
                {guidesSingle.specialties?.map((specialty, index) => (
                  <li key={index}>{specialty}</li>
                )) || ''}
              </ul>
            </div>
            <img src={user.photoURL} className="max-w-xl rounded-lg " />
          </div>
        </div>
      </div>
      <TitleandSubtitle heading='Add a Guide' subtitle="Please fill all the fields to get hired and get an opportunity" />
      <form
        className="card-body flex justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* 1st row */}
        <div className="flex gap-8 w-full">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              className="input input-bordered"
              defaultValue={user.email}
            />
          </div>
          {/* name field */}
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              className="input input-bordered"
              defaultValue={user.displayName}
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex gap-8 w-full">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              {...register("image_url")}
              type="text"
              className="input input-bordered"
              defaultValue={user.photoURL}
            />
          </div>
          <div className="form-control w-[49%] text-black">
            <label className="label">
              <span className="label-text">Guide Experience</span>
            </label>
            <select
              {...register("experience", { required: true })}
              className="input input-bordered w-full"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            {errors.experience && (
              <span className="text-red-500">Experience is required</span>
            )}
          </div>
        </div>
        {/* 3rd row */}
        <div className="flex gap-8 w-full">
          <div className="form-control w-[49%] text-black">
            <label className="label">
              <span className="label-text">City</span>
            </label>
            <select
              {...register("city", { required: true })}
              className="input input-bordered w-full"
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Shylet">Shylet</option>
              <option value="Chatagong">Chaottogram</option>
              <option value="Barishal">Barishal</option>
            </select>
            {errors.city && (
              <span className="text-red-500">City is required</span>
            )}
          </div>
          <div className="form-control w-[49%] text-black">
            <label className="label">
              <span className="label-text">Availability</span>
            </label>
            <select
              {...register("availability", { required: true })}
              className="input input-bordered w-full"
            >
              <option value="Weekdays only">Weekdays only</option>
              <option value="Flexible">Flexible</option>
            </select>
            {errors.availability && (
              <span className="text-red-500">Availability is required</span>
            )}
          </div>
        </div>
        {/* 4th row */}
        <div className="flex gap-8 w-full">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Price Range</span>
            </label>
            <input
              {...register("price_range")}
              type="text"
              className="input input-bordered text-black"
              required
            />
          </div>
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Bio</span>
            </label>
            <input
              {...register("bio")}
              type="text"
              className="input input-bordered text-black"
              required
            />
          </div>
        </div>
        <button className="btn btn-success mt-4" type="submit">
          Add a guide
        </button>
      </form>
    </div>
  );
};

export default GuideProfile;
