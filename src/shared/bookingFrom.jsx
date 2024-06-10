import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/authProvider";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import useAxiousSequer from "../hooks/useAxiousSequer";
import Swal from "sweetalert2";
import useGuide from "../hooks/useGuide";

const BookingForm = ({ singleDetails }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [Guides] = useGuide();

  const { user } = useContext(AuthContext);
  const [guideDetails, setGuideDetails] = useState({ name: "", email: "" });
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSequer = useAxiousSequer();

  useEffect(() => {
    if (user) {
      setValue("tourist_email", user.email);
      setValue("tourist_name", user.displayName);
      setValue("tourist_image", user.photoURL);
      setValue("tour_price", singleDetails.price);
    }
  }, [user, setValue, singleDetails.price]);

  const onSubmit = (data) => {
    const completeData = {
      ...data,
      tourist_email: user.email,
      tourist_name: user.displayName,
      tourist_image: user.photoURL,
      booking_date: startDate,
      package_type: singleDetails.tour_type,
      tour_price: singleDetails.price,
      status: "review",
      guide_name: guideDetails.name,
      guide_email: guideDetails.email,
    };
    // console.log(completeData);
    Swal.fire({
      title: "Are you sure?",
      text: "Your booking will confirm",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book Now",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSequer.post("/mybooking", completeData).then((res) => {
          // console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Booking successfully",
              text: "Your booking has been confirmed.",
              icon: "success",
            });
            reset();
          }
        });
      }
    });
  };

  const handleGuideChange = (event) => {
    const selectedGuide = JSON.parse(event.target.value);
    setGuideDetails(selectedGuide);
  };

  return (
    <div className="mx-5">
      <form
        className="card-body flex justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* 1st row of form */}
        <div className="flex gap-8 w-full">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Tourist Email</span>
            </label>
            <input
              {...register("tourist_email")}
              type="email"
              className="input input-bordered"
              defaultValue={user.email}
              disabled
            />
          </div>
          {/* name field */}
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Tourist Name</span>
            </label>
            <input
              {...register("tourist_name")}
              type="text"
              className="input input-bordered"
              defaultValue={user.displayName}
              disabled
            />
          </div>
        </div>

        {/* 2nd row of form */}
        <div className="flex gap-8 w-full">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              {...register("tourist_image")}
              type="text"
              className="input input-bordered"
              defaultValue={user.photoURL}
              disabled
            />
          </div>

          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Guide</span>
            </label>
            <select
              {...register("guide_name", { required: true })}
              className="input input-bordered w-full"
              onChange={handleGuideChange}
            >
              <option value="">Select a guide</option>
              {Guides.map((guide) => (
                <option
                  key={guide.email}
                  value={JSON.stringify({ name: guide.name, email: guide.email })}
                >
                  {guide.name}
                </option>
              ))}
            </select>
            {errors.guide_name && (
              <span className="text-red-500">Guide name is required</span>
            )}
          </div>
        </div>

        {/* 3rd row of form */}
        <div className="flex gap-8 w-full">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("tour_price")}
              type="number"
              placeholder={singleDetails.price}
              className="input input-bordered"
              disabled
            />
            {errors.tour_price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <DatePicker
              className="input input-bordered w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            {errors.Date && (
              <span className="text-red-500">Date is required</span>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered h-24"
            placeholder="Description"
          ></textarea>
        </div>

        {/* Submit button */}
        <button className="btn btn-success mt-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
