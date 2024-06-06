import React from 'react';
import ChildP from '../assests/img/Childl.jpeg';
export default function Whatwedo() {
  return (
    <div className='max-w-[1240px] py-3 p-2 mx-auto my-10 md:grid grid-cols-2'>
      <div className='col-span-1 md:w-[80%] text-center'>
        <img src={ChildP} alt="Children in need" className='inline' />
      </div>
      <div className='h-[200px] col-span-1 justify-center my-10 flex flex-col'>
        <h1 className='text-[#df9c00f3] font-bold mb- text-[20px] md:text-[30px]'>Our Mission</h1>
        <p className='my-3 text-justify'>
          We are dedicated to creating a safe and protective environment for all children, ensuring their well-being and upholding their rights.
        </p>
        <p className='my-3 text-justify'>
          Every child deserves the right to education. We believe that education is a fundamental right that should be accessible to all children, regardless of their background or circumstances.
        </p>
        
      </div>
    </div>
  )
}
