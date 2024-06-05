import React from 'react'
import { useLoaderData } from 'react-router-dom'
import useAxiousPublic from '../hooks/useAxiousPublic';
import { useQuery } from '@tanstack/react-query';
import Bakground from '../../public/img/cool-background.png'
import Inputbox from '../pages/Home/components/tabs/components/ourgudis/inputbox';

const GuidsDitails = () => {
    const id=useLoaderData();
    const axiosPublic = useAxiousPublic();

    const { data: guide = {}, isLoading, isError, error } = useQuery({
        queryKey: ['guide', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/guideDetails/${id}`);
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
    // console.log(guide);
  return (
  
  <div className="hero mt-2 min-h-[80vh] flex justify-center  gap-10" style={{backgroundImage: `url(${Bakground})`}}>
  <div >
  <div className="hero-content flex-col lg:flex-row">

    <div className='grid gap-1'>
      <h1 className="text-5xl text-center font-bold sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{guide.name}</h1>
      <p >Email: <span className='font-semibold'>{guide.email}</span></p>
      <p className="">Guide id: {guide._id.slice(0,5) || "365aj"}</p>
      <p className='text-xl font-semibold'>phone number: {guide?.phoneNumber||'71***550100'}</p>
      <p className="">Guide varification: {guide?.emailVerified || "False"}</p>
      <div>
        <p>Expriences: <span className='font-semibold'>{guide.experience}</span></p>
        <p>Living City: <span className='font-semibold'>{guide.city}</span></p>
        </div>
      <article>
      {guide.bio}
      </article>
        <h1 className='text-3xl font-bold'>Skill at</h1>
      <ul className='list-disc list-inside'>
        <li>{guide?.specialties[0]}</li>
        <li>{guide?.specialties[1]}</li>
        {guide?.specialties[2] && <li>{guide?.specialties[2]}</li>}
        
      </ul>
      <p>Language:</p>
      <div className="flex md:gap-2 gap-1 justify-evenly">
              <p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{guide.languages[0]}</p>
              <p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{guide.languages[1]}</p>
              {guide.languages[2]?<p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{guide.languages[2]}</p>:""}
              {guide.languages[3]?<p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{guide.languages[3]}</p>:""}
             
            </div>
            <p>specialties:</p>
            <div className="flex md:gap-2 gap-1 justify-evenly">
              <p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{guide.specialties[0]}</p>
              <p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{guide.specialties[1]}</p>
              {guide.specialties[2]?<p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{guide.specialties[2]}</p>:""}
              {guide.specialties[3]?<p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{guide.specialties[3]}</p>:""}
             
            </div>
        
<Inputbox guide={guide}></Inputbox>
    </div>

    <img src={guide.image_url}  alt="-----gudedImg------" className="max-w-xl rounded-lg " />
  </div>
</div>
  </div>

  )
}

export default GuidsDitails
