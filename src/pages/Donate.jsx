import React, { useState } from 'react';
import Whatwedo from "../components/NewsletterV.jsx";
import QrCodeImage from "../assests/img/Qrcode.jpeg";
import { db } from '../firebase'; // Adjust the import path according to your project structure
import { collection, addDoc } from 'firebase/firestore';

const DonatePage = () => {
  const [formData, setFormData] = useState({
    country: 'India',
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    govtIdProof: '',
    govtIdNumber: '',
    amount: '',
  });

  const [errors, setErrors] = useState({});
  const [showQrCode, setShowQrCode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        validationErrors[field] = `Please enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setShowQrCode(true);

      try {
        await addDoc(collection(db, 'donations'), formData);
       
      } catch (error) {
        console.error('Error adding document: ', error);
        alert('Failed to save donation details. Please try again.');
      }
    }
  };

  return (
    <>
      <Whatwedo a="Donate"/>
      <div className='bg-[#f8fafc] min-h-screen flex items-center justify-center'>
        <div className='max-w-5xl w-full mx-auto p-8 bg-white shadow-md rounded-lg'>
          <h1 className='text-3xl font-bold mb-6 text-center text-[#df9c00f3]'>Donate to Support Our Cause</h1>
          <div className='flex justify-center mb-6'>
            <button
              className='bg-[#df9c00f3] border-black text-white p-3 mx-2 my-2 rounded-lg hover:bg-slate-600 transition duration-300'
              onClick={() => setFormData({ ...formData, amount: '2000' })}
            >
              2000
            </button>
            <button
              className='bg-[#df9c00f3] text-white p-3 mx-2 my-2 rounded-lg hover:bg-slate-600 transition duration-300'
              onClick={() => setFormData({ ...formData, amount: '3000' })}
            >
              3000
            </button>
            <button
              className='bg-[#df9c00f3] text-white p-3 mx-2 my-2 rounded-lg hover:bg-slate-600 transition duration-300'
              onClick={() => setFormData({ ...formData, amount: '5000' })}
            >
              5000
            </button>
          </div>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Country:</label>
              <select
                name='country'
                value={formData.country}
                onChange={handleChange}
                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]'
                required
              >
                <option value='India'>India</option>
                <option value='USA'>USA</option>
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>First Name:</label>
              <input
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]'
                placeholder='Enter your first name'
                required
              />
              {errors.firstName && <p className='text-red-600'>{errors.firstName}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Last Name:</label>
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]'
                placeholder='Enter your last name'
                required
              />
              {errors.lastName && <p className='text-red-600'>{errors.lastName}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Contact Number:</label>
              <div className='flex'>
                <select
                  name='countryCode'
                  value={formData.country === 'India' ? '+91' : '+01'}
                  onChange={handleChange}
                  className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]'
                  disabled
                >
                  <option value='+91'>+91</option>
                  <option value='+01'>+01</option>
                </select>
                <input
                  type='tel'
                  name='contact'
                  value={formData.contact}
                  onChange={handleChange}
                  className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3] ml-2'
                  placeholder='Enter your contact number'
                  pattern='[0-9]{10}'
                  required
                />
              </div>
              {errors.contact && <p className='text-red-600'>{errors.contact}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Email:</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]'
                placeholder='Enter your email'
                required
              />
              {errors.email && <p className='text-red-600'>{errors.email}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Government ID Proof:</label>
              <select
                name='govtIdProof'
                value={formData.govtIdProof}
                onChange={handleChange}
                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]'
                required
              >
                <option value=''>Select ID Proof</option>
                {formData.country === 'India' ? (
                  <>
                    <option value='Aadhar Card'>Aadhar Card</option>
                    <option value='PAN Card'>PAN Card</option>
                    <option value='Driving License'>Driving License</option>
                  </>
                ) : (
                  <option value='Passport'>Passport</option>
                )}
              </select>
              {errors.govtIdProof && <p className='text-red-600'>{errors.govtIdProof}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                {formData.govtIdProof ? formData.govtIdProof : 'Government ID Number'}:
              </label>
              <input
                type='text'
                name='govtIdNumber'
                value={formData.govtIdNumber}
                onChange={handleChange}
                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]'
                placeholder={`Enter your ${formData.govtIdProof}`}
                required
              />
              {errors.govtIdNumber && <p className='text-red-600'>{errors.govtIdNumber}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Donation Amount:</label>
              <input
                type='number'
                name='amount'
                value={formData.amount}
                onChange={handleChange}
                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]'
                placeholder='Enter the amount'
                required
              />
              {errors.amount && <p className='text-red-600'>{errors.amount}</p>}
            </div>
            <div className='col-span-2 flex items:center justify-center'>
              <button
                type='submit'
                className='md:w-1/6 w-1/2  bg-[#df9c00f3] text-white py-3 px-6 rounded-lg hover:bg-slate-600 transition duration-300'
              >
                Donate Now
              </button>
            </div>
          </form>
          {showQrCode && (
            <div className='flex justify-center mt-6'>
              <img src={QrCodeImage} alt='QR Code' className='w-48 h-48' />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DonatePage;
