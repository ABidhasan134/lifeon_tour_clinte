import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/authProvider';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const BookingForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if (user) {
            setValue('tourist_email', user.email);
            setValue('tourist_name', user.displayName);
            setValue('tourist_image', user.photoURL);
        }
    }, [user, setValue]);

    const onSubmit = (data) => {
        const completeData = {
            ...data,
            tourist_email: user.email,
            tourist_name: user.displayName,
            tourist_image: user.photoURL,
            booking_date: startDate
        };
        console.log(completeData);
    };

    return (
        <div className="mx-5">
            <form className="card-body flex justify-center" onSubmit={handleSubmit(onSubmit)}>
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
                        >
                            <option value="">Select Guide</option>
                            <option value="Hasan Mia">Hasan Mia</option>
                            <option value="Dirruba Mohona">Dirruba Mohona</option>
                            <option value="Abid Hasan">Abid Hasan</option>
                        </select>
                        {errors.guide_name && <span className="text-red-500">Guide name is required</span>}
                    </div>
                </div>

                {/* 3rd row of form */}
                <div className="flex gap-8 w-full">
                    <div className="form-control w-[49%]">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            {...register("tour_price", { required: true })}
                            type="number"
                            placeholder="Price"
                            className="input input-bordered"
                        />
                        {errors.tour_price && <span className="text-red-500">Price is required</span>}
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
                        {errors.Date && <span className="text-red-500">Date is required</span>}
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
