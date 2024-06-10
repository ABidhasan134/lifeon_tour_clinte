import React from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiousSequer from '../../../../hooks/useAxiousSequer';
import { Helmet } from 'react-helmet-async';

const AddPackages = () => {
    const axiosSequer=useAxiousSequer()
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    // console.log(data);
    const info={
        tour_type: data.tour_type,
          popular_destinations: [data.popular_destinations,data.popular_destinations2],
          images: [data.images,data.image1,data.image3],
          trip_start_time: data.trip_start_time,
          trip_duration:data.trip_duration,
          tour_price: data.tour_price,
          guide_name: data.guide_name,
          tour_idea: data.tour_idea,
          days_activity: [data.days_activity,data.days_activity2,data.days_activity3],
          guide_email: data.guide_email
    }

    Swal.fire({
        title: "Are you sure?",
        text: "To add a new package",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Book Now",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSequer.post("/ourPackages", info)
          .then((res) => {
            // console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                title: "Add successfully",
                text: "you have add a new package",
                icon: "success",
              });
              reset();
            }
          });
        }
      });
    // You can add your form submission logic here
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Add New Packege</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body flex flex-col items-center">
        {/* 1st row */}
        <div className="flex gap-8 w-full mb-4">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Package Name</span>
            </label>
            <input
              {...register("tour_type", { required: true })}
              type="text"
              placeholder="Tour Type"
              className="input input-bordered text-black"
            />
            {errors.tour_type && (
              <span className="text-red-500">Tour type is required</span>
            )}
          </div>
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Popular Destination</span>
            </label>
            <input
              {...register("popular_destinations", { required: true })}
              type="text"
              placeholder="Popular destinations"
              className="input input-bordered text-black"
            />
            {errors.popular_destinations && (
              <span className="text-red-500">Popular destination is required</span>
            )}
          </div>
        </div>

        {/* 2nd row */}
        <div className="flex gap-8 w-full mb-4">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Images 1 URL</span>
            </label>
            <input
              {...register("images", { required: true })}
              type="url"
              placeholder="Image URL"
              className="input input-bordered text-black"
            />
            {errors.images && (
              <span className="text-red-500">Image URL is required</span>
            )}
          </div>
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              {...register("description", { required: true })}
              type="text"
              placeholder="Description"
              className="input input-bordered text-black"
            />
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>
        </div>

        {/* 3rd row */}
        <div className="flex gap-8 w-full mb-4">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Trip Start Time</span>
            </label>
            <input
              {...register("trip_start_time", { required: true })}
              type="date"
              className="input input-bordered text-black"
            />
            {errors.trip_start_time && (
              <span className="text-red-500">Trip start time is required</span>
            )}
          </div>
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Trip Duration</span>
            </label>
            <input
              {...register("trip_duration", { required: true })}
              type="text"
              placeholder="Trip duration"
              className="input input-bordered text-black"
            />
            {errors.trip_duration && (
              <span className="text-red-500">Trip duration is required</span>
            )}
          </div>
        </div>

        {/* 4th row */}
        <div className="flex gap-8 w-full mb-4">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("tour_price", { required: true })}
              type="number"
              placeholder="Tour Price"
              className="input input-bordered text-black"
            />
            {errors.tour_price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Guide Name</span>
            </label>
            <input
              {...register("guide_name", { required: true })}
              type="text"
              placeholder="Guide Name"
              className="input input-bordered text-black"
            />
            {errors.guide_name && (
              <span className="text-red-500">Guide name is required</span>
            )}
          </div>
        </div>

        {/* 5th row */}
        <div className="flex gap-8 w-full mb-4">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Tour Idea</span>
            </label>
            <input
              {...register("tour_idea", { required: true })}
              type="text"
              placeholder="Tour Idea"
              className="input input-bordered text-black"
            />
            {errors.tour_idea && (
              <span className="text-red-500">Tour idea is required</span>
            )}
          </div>
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Day 1 Activity</span>
            </label>
            <input
              {...register("days_activity", { required: true })}
              type="text"
              placeholder="Days activity"
              className="input input-bordered text-black"
            />
            {errors.days_activity && (
              <span className="text-red-500">Days activity is required</span>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex gap-8 w-full mb-4">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Image 2 URL</span>
            </label>
            <input
              {...register("image1")}
              type="url"
              placeholder="Image URL"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text"> Day 2 Activity</span>
            </label>
            <input
              {...register("days_activity2")}
              type="text"
              placeholder="Additional Days activity"
              className="input input-bordered text-black"
            />
          </div>
        </div>
        {/* new row */}
        <div className="flex gap-8 w-full mb-4">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Image 3 URL</span>
            </label>
            <input
              {...register("image3")}
              type="url"
              placeholder="Image URL"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text"> Day 3 Activity</span>
            </label>
            <input
              {...register("days_activity3")}
              type="text"
              placeholder="Additional Days activity"
              className="input input-bordered text-black"
            />
          </div>
        </div>
        {/* 10 row  */}
        <div className="flex gap-8 w-full mb-4">
        <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Popular Destination 2</span>
            </label>
            <input
              {...register("popular_destinations2", { required: true })}
              type="text"
              placeholder="Popular destinations"
              className="input input-bordered text-black"
            />
            {errors.popular_destinations && (
              <span className="text-red-500">Popular destination is required</span>
            )}
          </div>
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">guide email</span>
            </label>
            <input
              {...register("guide_email",{required:true})}
              type="email"
              placeholder="Guide email"
              className="input input-bordered text-black"
              
            />
            {errors.guide_email && (
              <span className="text-red-500">Guide email is required</span>
            )}
          </div>
        </div>
        
        <button className="btn btn-success mt-4 w-full" type="submit">
          Add Package
        </button>
      </form>
    </div>
  );
};

export default AddPackages;
