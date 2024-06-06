import React from 'react';
import Harsh from '../assests/img/Harsh.jpeg';
import NewsletterA from '../components/NewsletterV.jsx'
export default function AboutUs() {
  return (
    <>
    <NewsletterA a="About Us"/>
    <div className="w-full py-16 px-4 bg-gray-100">
      <div className="max-w-[1240px] mx-auto">
        
        <div className="md:grid grid-cols-2 gap-8">
          <div className="col-span-1 flex flex-col justify-center">
            <h2 className="text-3xl text-[#df9c00f3] font-bold mt-10 mb-2">Our Mission</h2>
            <p className="text-lg mb-4">
              We are dedicated to creating a safe and protective environment for all children, ensuring their well-being and upholding their rights. Every child deserves the right to education. We believe that education is a fundamental right that should be accessible to all children, regardless of their background or circumstances.
            </p>
            <h2 className="text-3xl text-[#df9c00f3] font-bold mb-2">Our Vision</h2>
            <p className="text-lg mb-4">
              Our vision is to see a world where every child is free from exploitation and able to enjoy their childhood. We aim to provide resources and support to help children grow and develop in a safe, nurturing environment.
            </p>
            <h2 className="text-3xl text-[#df9c00f3] font-bold mb-2">Our Team Size</h2>
            <p className="text-lg mb-10">
              We are currently expanding our membership as part of an initiative led by Harsh Nayan. Our mission is to uplift the standard of living for underprivileged children across India and contribute to the betterment of society. Join us in making a meaningful difference in the lives of those who need it most.
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Child_labour_cartoon_Hine_no_2870..jpg/500px-Child_labour_cartoon_Hine_no_2870..jpg" alt="Our Mission" className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
          <div className="flex justify-center">
            <div className="bg-white p-20 rounded hover:scale-105 transition-transform duration-300 shadow-lg flex flex-col items-center">
              <img src={Harsh} alt="Team Member" className="rounded-full w-40 h-40 mb-6 object-cover" />
              <h3 className="text-2xl font-bold mb-2">Harsh Nayan</h3>
              <p className="text-lg">Member & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
