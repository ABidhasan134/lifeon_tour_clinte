import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import useAxiousPublic from '../hooks/useAxiousPublic';

const ViewCategory = () => {
    const id = useLoaderData();
    const axiosPublic = useAxiousPublic();

    const { data: singleDetails = {}, isLoading, isError, error } = useQuery({
        queryKey: ['packages', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/alltourdetail/${id}`);
            return res.data;
        },
        enabled: !!id, // Only fetch if id is available
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="hero min-h-[400px] bg-gray-600 m-4 rounded-md">
            <div className="hero-content flex-col lg:flex-row items-center">
                <img src={singleDetails.image} className="max-w-sm rounded-lg shadow-2xl" alt="Tour" />
                <div>
                    <h1 className="text-5xl font-bold">{singleDetails.tour_type}</h1>
                    <p className="py-6">{singleDetails.description}</p>
                    <h1 className="text-2xl text-sky-500 font-bold my-3">Locations of trip</h1>
                    <div className="flex md:gap-2 gap-1 justify-evenly">
                        {singleDetails.popular_destinations?.map((destination, index) => (
                            <p
                                key={index}
                                className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-gray-800 rounded-3xl text-sky-600"
                            >
                                {destination}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewCategory;
