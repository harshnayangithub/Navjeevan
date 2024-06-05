import React from 'react';
import { ReactTyped } from 'react-typed';
import Home from '../assests/img/Childtrafficking.jpeg';

export default function Banner() {
  return (
    <div
      className='w-full h-screen bg-cover bg-center relative py-[100px]'
      style={{ backgroundImage: `url(${Home})` }}
    >
      <div className=' bg-opacity-70 w-full h-full flex items-center justify-center'>
        <div className='max-w-[1240px] py-[30px] mx-auto text-center font-bold'>
          <div className='text-xl md:text-4xl py-[40px] text-white'>
            Fight Against Atrocities
          </div>
          <h2 className='text-white text-3xl md:text-[60px] md:p-[30px] py-[30px]'>
            Speak Against Injustice.
          </h2>
          <div className='text-[20px] md:text-[50px] md:p-[24px] text-white py-[30px]'>
            Know
            <ReactTyped
              className='pl-2'
              strings={['Your Rights', 'Your Power', 'Your Importance']}
              typeSpeed={70}
              loop={true}
              backSpeed={70}
            />
          </div>
          <div className='py-4 flex space-x-4 justify-center'>
            <button className='w-full md:w-1/4 bg-blue-600 hover:scale-105 transition-transform duration-200 my-2 text-white p-2.5 justify-center rounded'>
              Get Help
            </button>
            <button className='w-full md:w-1/4 bg-blue-600 hover:scale-105 transition-transform duration-200 my-2 text-white p-2.5 justify-center rounded'>
              Donate Now
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
