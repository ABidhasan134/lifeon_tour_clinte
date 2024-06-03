import React from 'react'
import usePackages from '../../../../../hooks/usePackages'
import CardsItems from './cardsItems';

const OurPackages = () => {
    const [packages]=usePackages();
    console.log(packages)
  return (
   
    <div className="mx-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 relative sm:-top-12 md:top-0 lg:top-0">
      
      {packages.slice(0, 6).map((item) => {
        return <CardsItems ourPackage={item} key={item._id}></CardsItems>;
      })}
    </div>
  )
}

export default OurPackages
