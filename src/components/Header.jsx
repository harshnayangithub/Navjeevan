import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-[#df9c00f3] p-1'>
      <div className='max-w-[1240px] py-[1px] items-center flex justify-between mx-auto'>
        <Link to="/" className='text-white text-3xl font-bold flex flex-col items-center'>
          <div className='bg-white text-[#df9c00f3]  rounded'>Navjeevan</div>
          <span className='text-sm text-white'>End the Child Labour</span>
        </Link>
        {
          toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
            :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
        }
        <ul className='hidden md:flex text-white gap-10'>
          <li className='hover:underline hover:text-gray-200'><Link to="/">Home</Link></li>
          <li className='hover:underline hover:text-gray-200'><Link to="/donate">Donate</Link></li>
          <li className='hover:underline hover:text-gray-200'><Link to="/volunteer">Volunteer</Link></li>
          <li className='hover:underline hover:text-gray-200'><Link to="/contact">Our Initiatives</Link></li>
          <li className='hover:underline hover:text-gray-200'><Link to="/about">About us</Link></li>
          <li className='hover:underline hover:text-gray-200'><Link to="/contact">Contact</Link></li>
        </ul>

        <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[86px]
        ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
          <li className='p-5'><Link to="/" onClick={() => setToggle(false)}>Home</Link></li>
          <li className='p-5'><Link to="/donate" onClick={() => setToggle(false)}>Donate</Link></li>
          <li className='p-5'><Link to="/volunteer" onClick={() => setToggle(false)}>Volunteer</Link></li>
          <li className='p-5'><Link to="/about" onClick={() => setToggle(false)}>About us</Link></li>
          <li className='hover:underline hover:text-gray-200'><Link to="/contact">Our Initiatives</Link></li>
          <li className='p-5'><Link to="/contact" onClick={() => setToggle(false)}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
