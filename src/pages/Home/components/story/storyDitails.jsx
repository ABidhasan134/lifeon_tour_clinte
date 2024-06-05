// import React from 'react'
// import { FaShare } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import {FacebookShareButton, FacebookIcon} from "react-share";

// const StoryDitails = ({blog}) => {
//     const quote = `${blog.story}`;
//     // console.log(quote)
    

//     console.log(blog)
//   return (
//     <div className="bg-base-100 p-6 shadow-sm sm:mx-10 mx-4 sm:mb-10 mb-4 border-2 border-gray-100 rounded-sm items-center">
//       <div className="sm:flex grid items-center gap-4 p-4">
//         <h2 className="card-title">{blog.place_name}</h2>        
//         <p className="opacity-60">Writen by: {blog.person_name}</p>
//         <p className="opacity-60">Publishing Year: {blog.writenyear? '':"2024"}</p>
//       </div>
//       <div className="p-4 h-10 ">
//         <p className="text-ellipsis whitespace-nowrap overflow-hidden">{blog.short_description}</p>
//       </div>
//       {/* Open the modal using document.getElementById('ID').showModal() method */}

// <div className='flex gap-2 items-center mt-4'>
// <button className="btn mt-4 ml-4 bg-sky-400 hover:bg-sky-700 hover:text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>Read More</button>
// <button className='flex items-center mt-4'>
// <FacebookShareButton 
//                 url={"Lifeon.com"}
//                 quote={quote}
//                 hashtag={`#${blog.tour_type} #Lifeon #bangeladesh`}
//                 >
//                  <FacebookIcon size={48} ></FacebookIcon>
//               </FacebookShareButton>
// </button>
// <Link to="/allstory">
// <button className='btn btn-outline mt-4'>All Stories</button>
// </Link>
// </div>

// <dialog id="my_modal_1" className="modal">
//   <div className="modal-box bg-gray-800 text-white">
//     <h3 className="font-bold text-lg">{blog.place_name}</h3>
//     <h1>{blog.tour_type}</h1>
//     <h1>Autor: {blog.person_name}</h1>
//     <h1>year of writen: {blog.year?blog.year:'2024'}</h1>
//     <hr className="border-1 border-gray-400 my-4 w-max-auto" />
//     <img src={blog.person_image} alt="" />
//     <hr className="border-1 border-gray-400 my-4 w-max-auto" />
//     <p className="py-4">{blog.story}</p>
//     <hr className="border-1 border-gray-400 my-4 w-max-auto" />
//     <div className="modal-action">
//       <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
//         <button className="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>
//     </div>
//   )
// }

// export default StoryDitails
