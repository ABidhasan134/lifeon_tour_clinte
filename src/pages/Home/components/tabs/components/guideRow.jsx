import React from 'react'
import { Link } from "react-router-dom";
const GuideRow = ({guide,index}) => {
  return (
   
    <tr>
    <th>{index+1}</th>
    <td>{guide.name}</td>
    <td className='hidden md:table-cell'>{guide.email}</td>
    <td className='hidden md:table-cell'>{guide.availability}</td>
    <td><Link to={`/guideDetails/${guide._id}`}><button className='btn btn-outline'>profile</button></Link></td>
    
  </tr>
   
  )
}

export default GuideRow
