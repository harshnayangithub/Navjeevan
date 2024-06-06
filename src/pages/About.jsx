import React from 'react';

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-gray-100 py-12'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-blue-600 mb-6'>About Us</h1>
          <p className='text-lg text-gray-700 mb-6'>
            Our mission is to protect women and children against sexual harassment, child abuse, and child trafficking.
            We offer services such as rehabilitation, free education, and business startup assistance.
          </p>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-bold text-blue-600 mb-4'>Our Vision</h2>
          <p className='text-lg text-gray-700 mb-6'>
            We envision a world where women and children live in safety, dignity, and with equal opportunities for growth and success.
          </p>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-bold text-blue-600 mb-4'>Our Mission</h2>
          <p className='text-lg text-gray-700 mb-6'>
            Our mission is to empower women and children by providing them with the necessary tools and support to overcome adversity and thrive in society.
          </p>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-bold text-blue-600 mb-4'>Our Services</h2>
          <ul className='list-disc list-inside text-lg text-gray-700 mb-6'>
            <li>Rehabilitation Programs</li>
            <li>Free Education</li>
            <li>Business Startup Assistance</li>
            <li>Legal and Psychological Support</li>
            <li>Community Awareness Campaigns</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-bold text-blue-600 mb-4'>Meet Our Team</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <img src='https://via.placeholder.com/150' alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4' />
              <h3 className='text-xl font-bold text-blue-600 mb-2 text-center'>John Doe</h3>
              <p className='text-gray-700 text-center'>Founder & CEO</p>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <img src='https://via.placeholder.com/150' alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4' />
              <h3 className='text-xl font-bold text-blue-600 mb-2 text-center'>Jane Smith</h3>
              <p className='text-gray-700 text-center'>Chief Operating Officer</p>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <img src='https://via.placeholder.com/150' alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4' />
              <h3 className='text-xl font-bold text-blue-600 mb-2 text-center'>Emily Johnson</h3>
              <p className='text-gray-700 text-center'>Head of Education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
