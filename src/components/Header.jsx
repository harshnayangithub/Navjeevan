import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const changeLanguage = (languageCode) => {
    const selectElement = document.querySelector(".goog-te-combo");
    if (selectElement) {
      selectElement.value = languageCode;
      selectElement.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className='bg-[#df9c00f3] shadow-lg z-50 w-full relative'>
      <div className='max-w-[1240px] py-3 m-6px flex justify-between items-center mx-auto'>
        <Link to="/" className='text-white text-3xl font-bold flex flex-col items-center'>
          <div className='bg-white text-[#df9c00f3] rounded mx-1'>Navjeevan</div>
          <span className='text-sm text-white'>New Way of Life</span>
        </Link>
        {
          toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block ml-8' />
            :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block ml-4' />
        }
        <ul className='hidden md:flex text-white gap-10 font-semibold '>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/">Home</Link></li>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/donate">Donate</Link></li>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/volunteer">Volunteer</Link></li>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/ourinitiatives">Our Initiatives</Link></li>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/about">About us</Link></li>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/contact">Contact</Link></li>
          <li className='hover:underline hover:text-[#DD761C]' onClick={() => changeLanguage('en')}>English</li>
          <li className='hover:underline hover:text-[#DD761C]' onClick={() => changeLanguage('hi')}>हिन्दी</li>
        </ul>

        <ul className={`fixed top-0 left-0 w-full h-full bg-black text-white mt-[80px] z-40 transform ${toggle ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/" onClick={() => setToggle(false)}>Home</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/donate" onClick={() => setToggle(false)}>Donate</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/volunteer" onClick={() => setToggle(false)}>Volunteer</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/ourinitiatives" onClick={() => setToggle(false)}>Our Initiatives</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/about" onClick={() => setToggle(false)}>About us</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/contact" onClick={() => setToggle(false)}>Contact</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C]' onClick={() => changeLanguage('en')}>English</li>
          <li className='p-5 text-center hover:text-[#DD761C]' onClick={() => changeLanguage('hi')}>हिन्दी</li>
        </ul>
      </div>
    </div>
  );
}
