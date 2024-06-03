import React from 'react'
import { Link } from 'react-router-dom'

const PackageTitle = ({ourPackage}) => {
  return (
    <div className='grid justify-center'>
    <h1>{ourPackage.tour_type}</h1>
    <Link to={`/alltourdetail/${ourPackage._id}`}><button className="btn glass">View Package</button></Link>
    </div>
  )
}

export default PackageTitle
