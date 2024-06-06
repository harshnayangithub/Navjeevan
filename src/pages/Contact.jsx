import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className='min-h-screen bg-gray-100 py-12'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-blue-600 mb-4'>Contact Us</h1>
          <p className='text-lg text-gray-700'>
            We'd love to hear from you! Please fill out the form below to get in touch with us.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row lg:space-x-12'>
          <div className='flex-1 bg-white p-8 shadow-lg rounded-lg mb-8 lg:mb-0'>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='subject' className='block text-gray-700 font-bold mb-2'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className='flex-1'>
            <h2 className='text-2xl font-bold text-blue-600 mb-4'>Contact Information</h2>
            <p className='text-lg text-gray-700 mb-4'>
              Address: 123 NGO Street, Cityville, ST, 12345
            </p>
            <p className='text-lg text-gray-700 mb-4'>
              Phone: +1 (123) 456-7890
            </p>
            <p className='text-lg text-gray-700 mb-4'>
              Email: contact@ngo.org
            </p>
            <h2 className='text-2xl font-bold text-blue-600 mb-4'>Office Hours</h2>
            <p className='text-lg text-gray-700 mb-4'>
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <p className='text-lg text-gray-700 mb-4'>
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
