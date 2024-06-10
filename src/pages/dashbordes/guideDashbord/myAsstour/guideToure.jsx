import React, { useContext } from 'react'
import { AuthContext } from '../../../../context/authProvider'
import useAxiousSequer from '../../../../hooks/useAxiousSequer';
import { useQuery } from '@tanstack/react-query';
import GuideToureRow from './guideToureRow';
import { Helmet } from 'react-helmet-async';


const GuideToures = () => {
    const {user}=useContext(AuthContext)
    const axiousSequere=useAxiousSequer();

    const {data: guidetoure=[],isPending:isGuideLoading,refetch}=useQuery({
        queryKey: ['guidetoure',user.email],
        queryFn: async()=>{
            const res=await axiousSequere.get(`/guidetoure/${user.email}`);
            return res.data
        }
      })
    //   console.log(guidetoure)
    if(isGuideLoading){
      return<p>Loddding......</p>
    }
  return (
    <table className="table  text-2xl">
      <Helmet><title>My toure</title></Helmet>
      {/* head */}
      <thead className='text-2xl text-white'>
        <tr>
          <th></th>
          <th>Package Name</th>
          <th>Torist Name</th>
          <th>Date</th>
          <th>Price</th>
          <th>Status</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
            guidetoure.map((tour,index)=>{
                return <GuideToureRow tour={tour} index={index} key={tour._id} refetch={refetch}></GuideToureRow>
            })
        }
      </tbody>
    </table>
  )
}

export default GuideToures
