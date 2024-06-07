import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../context/authProvider';
import usePackages from '../hooks/usePackages';
import axios from 'axios';
import useAxiousSequer from '../hooks/useAxiousSequer';
import Swal from 'sweetalert2'

const IMG_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hoting_api = `https://api.imgbb.com/1/upload?key=${IMG_HOSTING_KEY}`;

const StoryForm = () => {
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
    const { user } = useContext(AuthContext);
    const [packages] = usePackages();
    const axiosSequer=useAxiousSequer();

    useEffect(() => {
        if (user) {
            setValue('person_image', user.photoURL);
        }
    }, [user, setValue]);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        try {
            const res = await axios.post(img_hoting_api, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.data.success) {
                const newStory = {
                    person_image: data.person_image,
                    place_name: data.place_name,
                    story: data.story,
                    short_description: data.short_description,
                    tour_type: data.tour_type,
                    image: res.data.data.url
                };
                console.log('New story:', newStory);
                 axiosSequer.post('/storys',newStory)
                 .then((res)=>{
                    console.log(res.data);
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your story add",
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                 })
                 

            }
        } catch (error) {
            console.error("Error uploading image", error);
        }
    };

    return (
        <div className="p-4">
            <form className="mt-2 gap-2" onSubmit={handleSubmit(onSubmit)}>
                {/* 1st row url and name */}
                <div className="flex flex-col md:flex-row justify-evenly gap-2">
                    <div className="w-full md:w-[50%]">
                        <label className="block mb-1">Image URL</label>
                        <input 
                            {...register("person_image", { required: true })}             
                            placeholder="Enter image URL"
                            defaultValue={user ? user.photoURL : ''} // Default value here
                            className={`mt-2 input input-bordered input-accent w-full ${errors.person_image ? 'border-red-500' : ''}`}
                        />
                        {errors.person_image && <p className="text-red-500">Image URL is required</p>}
                    </div>
                    <div className="w-full md:w-[50%]">
                        <label className="block mb-1">Place Name</label>
                        <select 
                            {...register("place_name", { required: true })}
                            defaultValue=""
                            className={`mt-2 input input-bordered input-accent w-full ${errors.place_name ? 'border-red-500' : ''}`}
                        >
                            <option value="" disabled>Select a place</option>
                            {
                                packages.map((item, index) => (
                                    <option key={index} value={item.title}>{item.title}</option>
                                ))
                            }
                        </select>
                        {errors.place_name && <p className="text-red-500">Place name is required</p>}
                    </div>
                </div>
                {/* 2nd row */}
                <div className="flex flex-col md:flex-row justify-evenly gap-2">
                    <div className="w-full md:w-[50%]">
                        <label className="block mb-1">Story</label>
                        <input 
                            {...register("story", { required: true })}             
                            placeholder="Story"
                            className={`mt-2 input input-bordered input-accent w-full ${errors.story ? 'border-red-500' : ''}`}
                        />
                        {errors.story && <p className="text-red-500">Story is required</p>}
                    </div>
                    <div className="w-full md:w-[50%]">
                        <label className="block mb-1">Short Description</label>
                        <input 
                            {...register("short_description", { required: true })}             
                            placeholder="Short Description"
                            className={`mt-2 input input-bordered input-accent w-full ${errors.short_description ? 'border-red-500' : ''}`}
                        />
                        {errors.short_description && <p className="text-red-500">Short description is required</p>}
                    </div>
                </div>
                {/* 3rd row */}
                <div className="flex flex-col md:flex-row justify-evenly gap-2">
                    <div className="w-full md:w-[50%]">
                        <label className="block mb-1">Tour Type</label>
                        <select 
                            {...register("tour_type", { required: true })}
                            className={`mt-2 input input-bordered input-accent w-full ${errors.tour_type ? 'border-red-500' : ''}`}
                        >
                            <option value="" disabled>Select a tour type</option>
                            {
                                packages.map((item, index) => (
                                    <option key={index} value={item.tour_type}>{item.tour_type}</option>
                                ))
                            }
                        </select>
                        {errors.tour_type && <p className="text-red-500">Tour type is required</p>}
                    </div>
                    <div className="w-full md:w-[50%] flex-1">
                        <label className="block mb-1">Image</label>
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className="file-input w-full max-w-xs"
                        />
                        {errors.image && <span className="text-red-500">Image is required</span>}
                    </div>
                </div>
                <button className="mt-2 btn btn-primary btn-accent w-full">
                    Add My Story
                </button>
            </form>
        </div>
    );
};

export default StoryForm;
