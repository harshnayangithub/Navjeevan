import React from 'react';

import ChildP from "../assests/img/Flex1.jpeg";
import Home from "../assests/img/Flex2.jpeg";
import Homea from "../assests/img/Flex3.jpeg";
import Whatwedo from "../components/NewsletterV"
import { Link } from 'react-router-dom';
const Initiative = ({ title, description, buttonColor, imgSrc }) => (
  <div className="relative h-[400px] max-w-[1240px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl my-10 md:grid grid-cols-2">
    <div className="col-span-1 md:w-[80%] text-center">
      <img src={imgSrc} alt="Children in need" className="inline h-full w-full object-cover" />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center col-span-1 p-8">
      <h2 className="text-4xl font-bold mb-4 text-center text-[#df9c00f3]">{title}</h2>
      <p className="text-center text-xl mb-4">{description}</p>
      <button className="w-full md:w-1/4 bg-[#df9c00f3] hover:bg-[#DD761C] hover:scale-105 transition-transform duration-200 my-2 text-white p-3.5 justify-center rounded">
              <Link to="/donate" className="block w-full h-full">
                Donate Now
              </Link>
            </button>
    </div>
  </div>
);

export default function OurInitiatives() {
  return (
    <>
    <Whatwedo a="Our Initiatives" />
    <div className='w-full py-16 px-4 bg-gray-100'>
      <div className='space-y-16'>
        <Initiative
          title="Bal Kalyan Yojna"
          description="This initiative aims to protect children from child labor, allowing them to enjoy their childhood through education and play. We strive to provide a nurturing environment where every child can thrive."
          buttonColor="#FFA500"
          imgSrc={ChildP}
        />
        <Initiative
          title="Bal Vikas Yojna"
          description="Bal Vikas Yojna focuses on the holistic development of children. From nutrition to soft skills, we cover all aspects to ensure that every child grows up healthy, educated, and capable."
          buttonColor="#1E90FF"
          imgSrc={Home}
        />
        <Initiative
          title="Bal Aawash Yojna"
          description="Bal Aawash Yojna provides rehabilitation for victims of child trafficking. We offer a safe haven for children who have been rejected by their parents or need a secure environment to continue their education and healing process."
          buttonColor="#32CD32"
          imgSrc={Homea}
        />
      </div>
    </div>
    </>
  );
}
