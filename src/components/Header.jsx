import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  useEffect(() => {
    const hideTranslateToolbar = () => {
      const translateBanner = document.querySelector('.goog-te-banner-frame.skiptranslate');
      if (translateBanner) {
        translateBanner.style.display = 'none';
      }
    };
    hideTranslateToolbar();

    // Also hide the toolbar after a delay to ensure it catches any late injections
    const intervalId = setInterval(hideTranslateToolbar, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const changeLanguage = (languageCode) => {
    const selectElement = document.querySelector(".goog-te-combo");
    if (selectElement) {
      selectElement.value = languageCode;
      selectElement.dispatchEvent(new Event("change"));
      setShowLanguageDropdown(false); // Hide dropdown after selection
      setToggle(false); // Hide mobile menu after selection
    }
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'mr', label: 'मराठी' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'ml', label: 'മലയാളം' },
    { code: 'as', label: 'অসমীয়া' },
  ];

  return (
    <div className='bg-[#df9c00f3] shadow-lg z-50 w-full relative'>
      <div className='max-w-[1240px] py-3 px-6 flex justify-between items-center mx-auto'>
        <Link to="/" className='text-white text-3xl font-bold flex flex-col items-center'>
          <div className='bg-white text-[#df9c00f3] rounded px-2'>Navjeevan</div>
          <span className='text-sm text-white'>New Way of Life</span>
        </Link>
        {
          toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block ml-8' />
            :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block ml-4' />
        }
        <ul className='hidden md:flex text-white gap-10 font-semibold'>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/">Home</Link></li>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/donate">Donate</Link></li>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/volunteer">Volunteer</Link></li>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/ourinitiatives">Our Initiatives</Link></li>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/about">About us</Link></li>
          <li className='hover:underline hover:text-[#DD761C]'><Link to="/contact">Contact</Link></li>
          <li className='relative hover:underline hover:text-[#DD761C]'>
            <span onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>Language</span>
            {showLanguageDropdown && (
              <ul className='absolute bg-white text-black right-0 top-full mt-2 p-2 shadow-lg rounded'>
                {languages.map(lang => (
                  <li key={lang.code} className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => changeLanguage(lang.code)}>
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <ul className={`fixed top-0 left-0 w-full h-full bg-black text-white mt-[80px] z-40 transform ${toggle ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/" onClick={() => setToggle(false)}>Home</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/donate" onClick={() => setToggle(false)}>Donate</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/volunteer" onClick={() => setToggle(false)}>Volunteer</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/ourinitiatives" onClick={() => setToggle(false)}>Our Initiatives</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/about" onClick={() => setToggle(false)}>About us</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/contact" onClick={() => setToggle(false)}>Contact</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C]' onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
            <span>Choose Language</span>
          </li>
          {showLanguageDropdown && (
            <ul className='bg-black p-5 text-center'>
              {languages.map(lang => (
                <li key={lang.code} className='p-2 hover:text-[#DD761C] cursor-pointer' onClick={() => changeLanguage(lang.code)}>
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}
