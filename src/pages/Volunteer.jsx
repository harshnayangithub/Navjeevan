import React, { useState } from 'react';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    // You can add actual form submission logic here (e.g., sending data to a server)
  };
  return (
    <div className='w-full py-16 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto'>
        <h2 className='text-4xl font-bold text-center py-8'>Volunteer with Us</h2>
        <p className='text-center text-xl mb-8'>
          Join us in our mission to protect women and children against sexual harassment, child abuse, and trafficking.
          Your support can make a significant impact.
        </p>

        <div className='md:grid grid-cols-2 gap-8'>
          {/* Volunteer Information */}
          <div className='p-4'>
            <h3 className='text-2xl font-bold mb-4'>Why Volunteer?</h3>
            <ul className='list-disc list-inside'>
              <li className='py-2'>Make a positive impact in the community.</li>
              <li className='py-2'>Gain valuable experience and skills.</li>
              <li className='py-2'>Meet like-minded individuals and network.</li>
              <li className='py-2'>Receive recognition and rewards.</li>
            </ul>
          </div>

          {/* Volunteer Form */}
          <div className='bg-gray-100 p-8 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-bold mb-4'>Sign Up to Volunteer</h3>
            {submitted ? (
              <div className='text-green-600 text-xl text-center'>
                Your response has been recorded. Thank you for volunteering!
              </div>
            ) : (
              <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
                <input
                  type='text'
                  name='fullName'
                  placeholder='Full Name'
                  value={formData.fullName}
                  onChange={handleChange}
                  className='p-3 rounded border border-gray-300'
                  required
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                  className='p-3 rounded border border-gray-300'
                  required
                />
                <input
                  type='tel'
                  name='phone'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                  className='p-3 rounded border border-gray-300'
                  required
                />
                <textarea
                  name='message'
                  placeholder='Tell us why you want to volunteer'
                  rows='4'
                  value={formData.message}
                  onChange={handleChange}
                  className='p-3 rounded border border-gray-300'
                  required
                />
                <button className='w-full bg-[#df9c00f3] hover:bg-[#DD761C] text-white p-3 rounded'>
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}