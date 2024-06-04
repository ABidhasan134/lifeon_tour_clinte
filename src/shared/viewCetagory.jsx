import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import useAxiousPublic from '../hooks/useAxiousPublic';
import ViewGalery from '../pages/Home/components/tourType/components/viewGalery';
import AboutTour from '../pages/Home/components/tourType/components/aboutTour';
import TitleandSubtitels from './titleandSubtitels';
import TourPlan from '../pages/Home/components/tourType/components/tourPlan';
import OurGurids from '../pages/Home/components/tabs/components/ourGurids'
import BookingFrom from './bookingFrom';

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
    // console.log(singleDetails);

    return (
        <div>
            <ViewGalery img={singleDetails.images}></ViewGalery>
            <AboutTour singleDetails={singleDetails}></AboutTour>
            <TitleandSubtitels heading="Our tour Plan" subtitle="you would love to read what we enjoy in day"></TitleandSubtitels>
            <TourPlan days={singleDetails.days_activity}></TourPlan>
            <TitleandSubtitels heading="Our Heros" subtitle="you would love to meet our hero. Choose your tour patnare"></TitleandSubtitels>
            <OurGurids></OurGurids>
            <TitleandSubtitels heading="Booking Now" subtitle="To booking for this pacage your have to filup this from"></TitleandSubtitels>
            <BookingFrom></BookingFrom>
        </div>
    );
}

export default ViewCategory;
