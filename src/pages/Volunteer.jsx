import React from 'react';
import Whatwedo from "../components/NewsletterV.jsx";
import { Link } from "react-router-dom";

export default function Plans() {
  return (
    <>
      <Whatwedo a="Volunteer" />
      <div className='w-full py-1 px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto'>
          <p className='text-center font-bold text-xl mt-10 mb-8'>
            Join us in our mission to protect children against labor, abuse, and trafficking. Your support can make a significant impact.
          </p>

          <div className='md:grid grid-cols-1 gap-8'>
            {/* Volunteer Information */}
            <div className='p-4 bg-gray-100 rounded-lg shadow-lg border border-black'>
              <h3 className='text-2xl font-bold text-[#df9c00f3] mb-4'>
                Why Volunteer?
              </h3>
              <p className='mb-4'>
                Volunteering with us can be a profoundly rewarding experience. Here are some reasons why you should consider joining our cause:
              </p>
              <ul className='list-disc list-inside'>
                <li className='py-2'>Help eradicate child labor and give children a chance to learn and grow.</li>
                <li className='py-2'>Support efforts to rescue children from abusive environments and provide them with a safe haven.</li>
                <li className='py-2'>Become a part of a community dedicated to ending child trafficking and giving victims a new start.</li>
                <li className='py-2'>Gain valuable experience in social work, community organizing, and advocacy.</li>
                <li className='py-2'>Connect with like-minded individuals who are passionate about protecting children.</li>
                <li className='py-2'>Receive training and mentorship from experienced professionals in the field.</li>
                <li className='py-2'>Be recognized for your efforts and make a tangible impact on the lives of children in need.</li>
              </ul>
            </div>

            <div className='md:grid grid-cols-2 my-2 mx-2 gap-8 mt-8'>
              <div className='p-4 hover:scale-105 transform transition duration-300'>
                <img
                  src='https://wallpapers.com/images/hd/poor-children-black-and-white-0jzul9my0hhjrv73.jpg'
                  alt='Child Labor'
                  className='rounded-lg w-full h-64 md:h-96 object-cover shadow-lg'
                />
              </div>
              <div className='p-4 hover:scale-105 transform transition duration-600'>
                <img
                  src='https://e1.pxfuel.com/desktop-wallpaper/374/108/desktop-wallpaper-poverty-posted-by-ryan-mercado-poor-children.jpg'
                  alt='Child Abuse'
                  className='rounded-lg w-full h-64 md:h-96 object-cover shadow-lg'
                />
              </div>
            </div>

            <div className='md:grid grid-cols-2 gap-8 mt-8'>
              <div className='p-4 hover:scale-105 transform transition duration-600'>
                <img
                  src='https://i.pinimg.com/originals/80/78/0e/80780ec450e9d2e9d3eeef12bb2cb640.jpg'
                  alt='Child Labor'
                  className='rounded-lg w-full h-64 md:h-96 object-cover shadow-lg'
                />
              </div>
              <div className='p-4 hover:scale-105 transform transition duration-600'>
                <img
                  src='https://i.pinimg.com/474x/bb/5a/c3/bb5ac336ef6299ff7479c354a7ce185a.jpg'
                  alt='Child Abuse'
                  className='rounded-lg w-full h-64 md:h-96 object-cover shadow-lg'
                />
              </div>


              </div>

              <div className='flex items-center justify-center mb-[40px] '>
                <button className=' w-1/8 bg-[#df9c00f3] hover:bg-[#DD761C]  text-white text-xl p-3 rounded-lg'>
                  <Link to="https://forms.gle/h9VPVK9KUMmn1Sn37" className="flex items-center justify-center">
                    Volunteer Form
                  </Link>
                </button>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
