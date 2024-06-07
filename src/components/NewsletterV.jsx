import React from 'react';

import Home from '../assests/img/Childbg.jpeg';

export default function Newsletter(props) {
  return (
    <div className='md:flex justify-center items-center max-w-full m-100px py-[30px] md:py-[80px] p-30px mx-auto bg-cover bg-center' style={{ backgroundImage: `url(${Home})` }}>
      <div className='flex flex-col items-center bg- bg-opacity-50 p-10 rounded-lg'>
        <h1 className='text-[40px] md:text-[55px] mt-[40px] md:mt-[20px] font-bold text-white md:mb-8 text-center'>
        { props.a }

        </h1>
        
      </div>
    </div>
  );
}
