import React from "react";
import ChildP from "../assests/img/Flex1.jpeg";
import Home from "../assests/img/Flex2.jpeg";
import Homea from "../assests/img/Flex3.jpeg";
import { Link } from "react-router-dom";
export default function Plans() {
  return (
    <div className="py-[10px] px-2   m-10">
      <div className="bg-opacity-70  text-[#df9c00f3] text-[50px] w-full h-full flex items-center justify-center font-bold size-4xl ">
        Our Initiatives{" "}
      </div>
      <div className="max-w-[1240px] m-5 mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl h-[400px] my-2 mx-2 bg-gray-100 hover:scale-105 duration-500">
          <img src={ChildP} alt="" className="inline " />
          <h1 className="flex items-center justify-center mt-5 font-bold text-[#df9c00f3]">
            BAL KALYAN YOGNA
          </h1>
          <div className="py-4 flex space-x-4 justify-center">
            <button className="w-full md:w-1/3 bg-[#df9c00f3]  hover:bg-[#DD761C] hover:scale-105 transition-transform duration-200 my-2 text-white p-2.5 justify-center rounded">
              <Link to="/About" className="block w-full h-full">
                Learn More
              </Link>
            </button>
            <button className="w-full md:w-1/3 bg-[#df9c00f3] hover:bg-[#DD761C] hover:scale-105 transition-transform duration-200 my-2 text-white p-2.5 justify-center rounded">
              <Link to="/donate" className="block w-full h-full">
                Donate Now
              </Link>
            </button>
          </div>
        </div>

        <div className="shadow-xl h-[400px] my-2 mx-3 bg-gray-100  hover:scale-105 duration-500">
          <img src={Home} alt="" className="inline " />
          <h1 className="flex items-center justify-center mt-5 font-bold text-[#df9c00f3]">
            BAL VIKASH YOGNA
          </h1>
          <div className="py-4 flex space-x-4 justify-center">
            <button className="w-full md:w-1/3 bg-[#df9c00f3] hover:scale-105  hover:bg-[#DD761C] transition-transform duration-200 my-2 text-white p-2.5 justify-center rounded">
              <Link to="/About" className="block w-full h-full">
                Learn More
              </Link>
            </button>
            <button className="w-full md:w-1/3 bg-[#df9c00f3] hover:scale-105 hover:bg-[#DD761C]  transition-transform duration-200 my-2 text-white p-2.5 justify-center rounded">
              <Link to="/donate" className="block w-full h-full">
                Donate Now
              </Link>
            </button>
          </div>
        </div>

        <div className="shadow-xl h-[400px] my-2 mx-2 bg-gray-100  hover:scale-105 duration-500">
          <img src={Homea} alt="" className="inline " />
          <h1 className="flex items-center justify-center mt-5 font-bold text-[#df9c00f3]">
            BAL AAWASH YOGNA
          </h1>
          <div className="py-4 flex space-x-4 justify-center">
            <button className="w-full md:w-1/3 bg-[#df9c00f3] hover:bg-[#DD761C] hover:scale-105 transition-transform duration-200 my-2 text-white p-2.5 justify-center rounded">
              <Link to="/About" className="block w-full h-full">
                Learn More
              </Link>
            </button>
            <button className="w-full md:w-1/3 bg-[#df9c00f3] hover:scale-105 hover:bg-[#DD761C] transition-transform duration-200 my-2 text-white p-2.5 justify-center rounded">
              <Link to="/donate" className="block w-full h-full">
                Donate Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
