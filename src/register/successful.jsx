import React from 'react'

import { Link } from 'react-router-dom';
import singIcon from '../../public/img/Animation - 1713035402449.gif'

const Successful = () => {
  return (
    // <h1 class="animate__animated animate__flash">An animated element</h1>
    <div className='grid justify-center items-center h-[80vh] gap-0 bg-purple-50 rounded-lg'>
        <div className='text-center grid justify-center animate__animated animate__fadeInDownBig'>
        <div className='flex justify-center'>
        {/* <IoCheckmarkCircleSharp className='text-5xl text-green-500 text-center'></IoCheckmarkCircleSharp> */}
        <img src={singIcon} alt="" />
        </div>
        <h1 className='text-5xl m-4'>Register successfuly</h1>
        <p>
         Your Life on Journey Begins Here!" <br />
        This subtitle conveys a warm welcome to the user who has successfully registered <br />
         with the Travel company. It suggests that their journey with the company is about <br />
         to start, indicating that they can expect valuable services and assistance in their real <br />
          touring endeavors. Feel free to customize it further to better fit your brand's tone and style.
        </p>
        <Link className='btn bg-sky-400 hover:bg-sky-700 
        mt-4 hover:text-white' to="/">Home</Link>
        </div>
        
    </div>
  )
}

export default Successful
