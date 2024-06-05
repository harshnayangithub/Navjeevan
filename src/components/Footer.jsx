import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='bg-[#2699fb] mx-auto py-10 px-12 text-white'>
      <div className='grid gap-8 lg:grid-cols-3 px-12'>
        <div>
          <h1 className='w-full text-3xl font-bold text-black'>Fight For Yourself</h1>
          <p className='py-4 '>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.
          </p>
          <div className='flex justify-between max-w-[220px] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className='lg:col-span-2 flex flex-wrap justify-between mt-1'>
          <div className='w-full sm:w-1/2 lg:w-auto'>
            <h6 className='font-medium text-black'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>
          <div className='w-full sm:w-1/2 lg:w-auto'>
            <h6 className='font-medium text-black'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>API Status</li>
            </ul>
          </div>
          <div className='w-full  sm:w-1/2 lg:w-auto'>
            <h6 className='font-medium text-black'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
              <li className='py-2 text-sm'>Careers</li>
            </ul>
          </div>
          <div className='w-full  sm:w-1/2 lg:w-auto'>
            <h6 className='font-medium text-black'>Legal</h6>
            <ul>
              <li className='py-2 text-sm'>Claim</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='px-12'> © Copyright 2024 | All Rights Reserved by{" "} | Created by Harsh Nayan</div>
    </div>
  );
}
