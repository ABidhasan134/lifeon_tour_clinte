import React from 'react'

const AboutTour = ({singleDetails}) => {
  return (
    <div className="m-6 bg-gray-100 p-6 rounded-md">
        <div>
                    <h1 className="text-5xl font-bold">{singleDetails.tour_type}</h1>
                    <p className="py-6">{singleDetails.description}</p>
                    <p className="py-6">{singleDetails?.tour_idea}</p>

                    <h1 className="text-2xl text-sky-500 font-bold my-3">Locations of trip</h1>
                    <div className="flex md:gap-2 gap-1 justify-evenly">
                        {singleDetails?.popular_destinations?.map((destination, index) => (
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
  )
}

export default AboutTour
