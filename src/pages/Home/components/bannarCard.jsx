import React from 'react'

const BannarCard = ({img,heading,subheading}) => {
  return (
    <div className="hero min-h-[600px]" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
      <p className="mb-5">{subheading}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default BannarCard
