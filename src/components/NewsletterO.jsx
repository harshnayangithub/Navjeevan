import React from 'react';

import Home from '../assests/img/About.jpeg';

export default function Newsletter() {
  return (
    <div className='md:flex justify-center items-center max-w-full m-100px py-[30px] md:py-[130px] p-30px mx-auto bg-cover bg-center' style={{ backgroundImage: `url(${Home})` }}>
      <div className='flex flex-col items-center bg-black bg-opacity-50 p-10 rounded-lg'>
        <h1 className='text-[40px] md:text-[50px] font-bold text-white mb-8 text-center'>
          Our Initiatives
        </h1>
        
      </div>
    </div>
  );
}
