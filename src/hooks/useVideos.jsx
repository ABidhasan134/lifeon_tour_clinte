import React from 'react'
import useAxiousPublic from './useAxiousPublic'
import { useQuery } from '@tanstack/react-query';

const useVideos = () => {
  const axiousPublic=useAxiousPublic();

  const {data: videos=[]}=useQuery({
    queryKey: 'videos',
    queryFn: async()=>{
        const res=await axiousPublic.get('/videos');
        return res.data
    }
  })
  return [videos]
}

export default useVideos
