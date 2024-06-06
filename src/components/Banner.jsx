import React from 'react';
import { ReactTyped } from 'react-typed';
import Home from '../assests/img/Labourc.jpeg';
import { Link } from 'react-router-dom';
export default function Banner() {
  return (
    <div
      className='w-full h-screen  bg-cover bg-center relative py-[120px]'
      style={{ backgroundImage: `url(${Home})` }}
    >
      <div className=' bg-opacity-70 w-full h-full flex items-center justify-center '>
        <div className='max-w-[1240px] py-[30px] mx-auto text-center font-bold'>
          <div className='text-xl md:text-4xl py-[40px] text-white'>
          Creating a World Free from Child Labour
          </div>
          <h2 className='text-white text-3xl md:text-[60px] md:p-[30px] py-[30px]'>
          Every Child Deserves a Childhood.
          </h2>
          <div className='text-[20px] md:text-[50px] md:p-[24px] text-white py-[30px]'>
          United Against
            <ReactTyped
              className='pl-2'
              strings={['Child Labour', 'Child Abuse', 'Child Trafficking']}
              typeSpeed={70}
              loop={true}
              backSpeed={70}
            />
          </div>
          <div className='py-4 flex space-x-4 justify-center'>
            <button className='w-full md:w-1/4 bg-[#df9c00f3] hover:bg-[#DD761C] hover:scale-105 transition-transform duration-200 my-2 text-white p-3.5 justify-center rounded'>
            <Link to="/ourinitiatives" className='block w-full h-full'>
          Learn More
        </Link>
            </button>
            <button className="w-full md:w-1/4 bg-[#df9c00f3] hover:bg-[#DD761C] hover:scale-105 transition-transform duration-200 my-2 text-white p-3.5 justify-center rounded">
              <Link to="/donate" className="block w-full h-full">
                Donate Now
              </Link>
            </button>
      
          </div>
        </div>
        
      </div>
    </div>
  );
}
