import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

import { Link } from 'react-router-dom';
import useStory from '../../../../../hooks/useStorys';

const Allstroy = () => {
  const [storys, isLoading, refetch] = useStory();
  console.log(storys);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {storys.map((blog, index) => (
        <div
          key={index}
          className="bg-base-100 p-6 shadow-sm sm:mx-10 mx-4 sm:mb-10 mb-4 border-2 border-gray-100 rounded-sm items-center"
        >
          <div className="sm:flex grid items-center gap-4 p-4">
            <h2 className="card-title">{blog.place_name}</h2>
            <p className="opacity-60">Written by: {blog.person_name}</p>
            <p className="opacity-60">
              Publishing Year: {blog.writenyear ? blog.writenyear : '2024'}
            </p>
          </div>
          <div className="p-4 h-10">
            <p className="text-ellipsis whitespace-nowrap overflow-hidden">
              {blog.short_description}
            </p>
          </div>

          <div className="flex gap-2 items-center mt-4">
            <button
              className="btn mt-4 ml-4 bg-sky-400 hover:bg-sky-700 hover:text-white"
              onClick={() => document.getElementById(`modal_${index}`).showModal()}
            >
              Read More
            </button>
            <FacebookShareButton
              url={"http://Lifeon.com"}
              quote={blog.short_description}
              hashtag={`#${blog.tour_type} #Lifeon #bangladesh`}
              className="flex items-center mt-4"
            >
              <FacebookIcon size={48} />
            </FacebookShareButton>
            <Link to="/allstory"></Link>
          </div>

          <dialog id={`modal_${index}`} className="modal">
            <div className="modal-box bg-gray-800 text-white">
              <h3 className="font-bold text-lg">{blog.place_name}</h3>
              <h1>{blog.tour_type}</h1>
              <h1>Author: {blog.person_name}</h1>
              <h1>Year Written: {blog.year ? blog.year : '2024'}</h1>
              <hr className="border-1 border-gray-400 my-4 w-max-auto" />
              <img src={blog.person_image} alt="" />
              <hr className="border-1 border-gray-400 my-4 w-max-auto" />
              <p className="py-4">{blog.story}</p>
              <hr className="border-1 border-gray-400 my-4 w-max-auto" />
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      ))}
    </div>
  );
};

export default Allstroy;

