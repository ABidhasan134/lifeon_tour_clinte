import React from 'react'
import useGuide from '../../../../../hooks/useGuide'
import GuideRow from './guideRow';

const OurGurids = () => {
    const [Guides]=useGuide();
    // console.log(Guides);
  return (
    <div className="overflow-x-auto my-16 snap-x">
  <table className="table table-zebra text-2xl">
    {/* head */}
    <thead className='text-2xl text-sky-700 '>
      <tr>
        <th></th>
        <th>Name</th>
        <th className='hidden md:table-cell'>email</th>
        <th className='hidden md:table-cell'>availability</th>
        <th>view profile</th>
      </tr>
    </thead>
    <tbody>
    
      {
          Guides.map((item,index)=>{
              return <GuideRow guide={item} index={index}></GuideRow>
        })
      }
      {/* row 2 */}
     
    </tbody>
  </table>
</div>
  )
}

export default OurGurids
