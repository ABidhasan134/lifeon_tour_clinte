import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../../context/authProvider'
import { useForm } from 'react-hook-form';
import TitleandSubtitels from '../../../../shared/titleandSubtitels';
import useAxiousSequer from '../../../../hooks/useAxiousSequer';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const ReqForGuide = () => {
  const {user}=useContext(AuthContext);
  const axiousSequer=useAxiousSequer();
  const { register, handleSubmit, setValue,reset, formState: { errors } } = useForm();
  useEffect(() => {
    if (user) {
        setValue('name', user.email);
        setValue('email', user.displayName);
        setValue('image_url', user.photoURL);
        
    }
}, [user, setValue]);
  const onSubmit = (data) => {
    const newGuide={
      name: user.displayName,
      experience: data.experience,
      availability: data.availability,
      price_range: data.price_range,
      bio: data.bio,
      image_url: user.photoURL,
      email: user.email,
      specialties: ['Hiking','Family tour'],
      languages: ['Bangla','English'],
      city: data.city,
      average_rating: 3.5,
      status: 'requsted'
    }
    // console.log(newGuide);
    axiousSequer.put(`/guides/${user.email}`, newGuide)
    .then((res)=>{
    //   console.log(res.data)
     
    if(res.data.upsertedCount>0 || res.data.modifiedCount){
      Swal.fire({
        title: "Request successfull",
        text: "Your has been submited.",
        icon: "success"
    });
    }
    if(res.data.matchedCount>0 && res.data.modifiedCount===0){
      Swal.fire({
        title: "Request successfull",
        text: "you already Request for Guide.",
        icon: "success"
    });
    }
    })
  };
  return (
    <div className="mx-5">
        <Helmet><title>Apply as Admin</title></Helmet>
     <TitleandSubtitels heading="Requst From" subtitle='To Apply for guide your have to fill this from'></TitleandSubtitels>
                <form className="card-body flex justify-center" onSubmit={handleSubmit(onSubmit)}>
                  {/* 1st row */}
                <div className="flex gap-8 w-full">
                    <div className="form-control w-[49%]">
                        <label className="label">
                            <span className="label-text"> Email</span>
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            className="input input-bordered"
                            defaultValue={user.email}
                            disabled
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
                            disabled
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
                            disabled
                        />
                    </div>
                    <div className="form-control w-[49%] text-black">
                        <label className="label">
                            <span className="label-text">Guide</span>
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
                        {errors.experience && <span className="text-red-500">Experience is required</span>}
                    </div>
                </div>
                {/* 3rd row */}
                <div className="flex gap-8 w-full">
                <div className="form-control w-[49%] text-black">
                        <label className="label">
                            <span className="label-text">Guide</span>
                        </label>
                        <select
                            {...register("city", { required: true })}
                            className="input input-bordered w-full"
                        >
                            <option value="Dhaka">Dhaka</option>
                            <option value="Shylet">Shylet</option>
                            <option value="Chatagong">Chatagong</option>
                            <option value="Barishal">Barishal</option>
                        </select>
                        {errors.city && <span className="text-red-500">city is required</span>}
                    </div>
                    <div className="form-control w-[49%] text-black">
                        <label className="label">
                            <span className="label-text">Guide</span>
                        </label>
                        <select
                            {...register("availability", { required: true })}
                            className="input input-bordered w-full"
                        >
                            <option value="Weekdays only">Weekdays only</option>
                            <option value="Flexible">Flexible</option>
                            
                        </select>
                        {errors.city && <span className="text-red-500">city is required</span>}
                    </div>
                    
                </div>
                    {/* 4th row */}
                    <div className="flex gap-8 w-full">
                    <div className="form-control w-[49%]">
                        <label className="label">
                            <span className="label-text">price_range</span>
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
          Request for guide
        </button>
                </form>
    </div>
  )
}

export default ReqForGuide
