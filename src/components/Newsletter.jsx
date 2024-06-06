import React from 'react';
import { Link } from 'react-router-dom';

export default function Newsletter() {
  return (
    <div className='md:flex justify-center max-w-full py-[30px] md:py-[70px] p-10 mx-auto bg-[#df9c00f3]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold text-white mb-8'>
          Be a Part of our Community
        </h1>
        <Link
          to='/volunteer'
          className='bg-[#FEB941]   hover:scale-105 p-4 justify-center text-white px-4 py-2 rounded-lg hover:bg-[#DD761C] transition duration-300'
        >
          Volunteer Now
        </Link>
      </div>
    </div>
  );
}
