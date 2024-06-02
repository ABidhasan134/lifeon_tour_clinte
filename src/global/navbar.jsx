import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
        </>
      );
  return (
    <div className="navbar bg-black  z-10 bg-opacity-50 container mx-auto rounded-xl text-white">
      <div className="flex-1">
        <Link to='/' className='btn btn-ghost'><span className='font-mono text-3xl'>Life On</span></Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  )
}

export default Navbar
