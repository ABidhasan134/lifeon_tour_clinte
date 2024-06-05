import React from 'react'
import usePackages from '../../../../../../hooks/usePackages';
import CardsItems from '../cardsItems';

const AllPackage = () => {
    const [packages]=usePackages();
  return (
    <div className="mx-2 my-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 relative sm:-top-12 md:top-0 lg:top-0">
      
      {packages.map((item) => {
        return <CardsItems ourPackage={item} key={item._id}></CardsItems>;
      })}
    </div>
  )
}

export default AllPackage
