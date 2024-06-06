import React from 'react';

import Home from '../assests/img/Labourc.jpeg';
export default function Newsletter() {
  return (
    <div className='md:flex justify-center max-w-full m-1000px py-[30px] md:py-[130px] p-40px mx-auto  bg-[#df9c00f3]' style={{ backgroundImage: `url(${Home})` }} >
      <div className='flex flex-col items-center'>
        <h1 className='text-[50px] font-bold text-white mb-8'>
         Our Initiatives
        </h1>
        
      </div>
    </div>
  );
}
