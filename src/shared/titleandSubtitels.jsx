import React from 'react'

const TitleandSubtitels = ({heading, subtitle}) => {
  return (
    <div className='grid justify-center text-center my-4'>
    <h1 className='text-3xl font-bold text-sky-400'>{heading}</h1>
    <p>{subtitle}</p>
</div>
  )
}

export default TitleandSubtitels
