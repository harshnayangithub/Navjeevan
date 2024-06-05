import React from 'react'
import ChildP from '../assests/img/ChildP.jpeg';
import Home from '../assests/img/Home.jpeg';
import Homea from '../assests/img/Childprostitution.jpeg';
export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
            <div className='shadow-xl h-[450px] my-2 mx-2 bg-gray-100 hover:scale-105 duration-500'><img src={ChildP} alt="" className='inline ' /></div>
            <div className='shadow-xl h-[450px] my-2 mx-3 bg-gray-100  hover:scale-105 duration-500'><img src={Home} alt="" className='inline ' /></div>
            <div className='shadow-xl h-[450px] my-2 mx-2 bg-gray-100  hover:scale-105 duration-500'><img src={Homea} alt="" className='inline ' /></div>
    </div>
    </div>
  )
}
