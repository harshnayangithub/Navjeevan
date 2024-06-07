import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Whatwedo from "../components/NewsletterV";

const Initiative = ({ title, description, imgSrc }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="relative h-auto max-w-[1240px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl my-10 md:grid grid-cols-2">
      <div className="col-span-1 md:w-[80%] text-center">
        <img src={imgSrc} alt="Children in need" className="inline h-full w-full object-cover" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center col-span-1 p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-[#df9c00f3]">{title}</h2>
        <p className={`text-center text-sm md:text-xl mb-4 ${showMore ? '' : 'line-clamp-3'}`}>
          {description}
        </p>
        {/* Show "Read More" button for larger screens */}
        <button
          className={`text-[#df9c00f3] mb-4 hidden md:block ${showMore ? 'invisible' : 'visible'}`} // Conditionally render based on showMore state
          onClick={toggleReadMore}
        >
          Read More
        </button>
        {showMore && (
          <button
            className="text-[#df9c00f3] mb-4 md:hidden"
            onClick={toggleReadMore}
          >
            Read Less
          </button>
        )}
        <button
          className="w-full md:w-1/4 bg-[#df9c00f3] hover:bg-[#DD761C] hover:scale-105 transition-transform duration-200 my-2 text-white p-3.5 justify-center rounded"
        >
          <Link to="/donate" className="block w-full h-full">
            Donate Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default function OurInitiatives() {
  return (
    <>
      <Whatwedo a="Our Initiatives" />
      <div className='w-full py-16 px-4 bg-gray-100'>
        <div className='space-y-16'>
          <Initiative
            title="Bal Kalyan Yojna"
            description="This initiative aims to protect children from child labor, allowing them to enjoy their childhood through education and play. We strive to provide a nurturing environment where every child can thrive."
            imgSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vciUyMGNoaWxkfGVufDB8fDB8fHww"
          />
          <Initiative
            title="Bal Vikas Yojna"
            description="Bal Vikas Yojna focuses on the holistic development of children. From nutrition to soft skills, we cover all aspects to ensure that every child grows up healthy, educated, and capable. Want to create a world where every child is free, safe, healthy and educated."
            imgSrc="https://www.shutterstock.com/image-photo/elementary-school-kids-having-fun-600nw-667950202.jpg"
          />
          <Initiative
            title="Bal Aawash Yojna"
            description="Bal Aawash Yojna provides rehabilitation for victims of child trafficking. We offer a safe haven for children who have been rejected by their parents or need a secure environment to continue their education and healing process."
            imgSrc="https://sites.psu.edu/global/files/2018/12/african-kids-1-1a3nonv.jpg"
          />
        </div>
      </div>
    </>
  );
}
