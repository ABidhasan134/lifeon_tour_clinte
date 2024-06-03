import React from 'react'

const OverViwe = ({item}) => {
    console.log(item);
  return (
    
    <div className='p-6 m-2'>
        <div className='grid justify-center text-center'>
            <h1 className='font-bold text-3xl'>{item.name}</h1>
            <p>{item.description}</p>
            <p>{item.famous_reason}</p>    
        </div>
        <div className=''>
        <iframe  width="100%"
    height="420"
    src={`${item.video_link}?autoplay=1`}
    title="YouTube video player"

    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default OverViwe
