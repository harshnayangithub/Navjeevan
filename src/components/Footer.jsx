import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#df9c00f3] mx-auto py-10 px-4 sm:px-12 text-white">
      <div className="grid gap-8 lg:grid-cols-3 px-4 sm:px-12">
        <div>
          <h1 className="w-full text-3xl font-bold text-black">
            Navjeevan Foundation
          </h1>
          <p className="py-4 ">
            Want to create a world where every child is free, safe, healthy and
            educated.
          </p>
          <div className="flex justify-between max-w-[220px] my-6">
          <a href="https://github.com/harshnayangithub " className='hover:text-[#DD761C]'>
                    <FaGithubSquare size={30} />
                  </a>
                  <a href="https://www.instagram.com/harsh.nayan_/" className='hover:text-[#DD761C]'>
                    <FaInstagram size={30} />
                  </a>
                  <a href="https://facebook.com/harshnayan" className='hover:text-[#DD761C]'>
                    <FaFacebookSquare size={30} />
                  </a>
                  <a href="https://twitter.com/harsh" className='hover:text-[#DD761C]'>
                    <FaTwitterSquare size={30} />
                  </a>
            
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-wrap justify-between mt-1">
          <div className="w-full sm:w-1/2 ">
            <h6 className="text-[24px]  text-black font-bold ">QUICK LINKS</h6>
            <ul>
              <li className="hover:underline  mt-2 hover:text-[#DD761C]  font-bold">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline mt-2 hover:text-[#DD761C]  font-bold">
                <Link to="/donate">Donate</Link>
              </li>
              <li className="hover:underline mt-2 hover:text-[#DD761C]  font-bold">
                <Link to="/volunteer">Volunteer</Link>
              </li>
              <li className="hover:underline mt-2 hover:text-[#DD761C]  font-bold">
                <Link to="/contact">Our Initiatives</Link>
              </li>
              <li className="hover:underline mt-2 hover:text-[#DD761C]  font-bold" >
                <Link to="/about">About us</Link>
              </li>
              <li className="hover:underline mt-2 hover:text-[#DD761C]  font-bold">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 p-4 mt-[20px] md:mt-[0px] mx-[-15px] ">
            <h6 className="text-[24px] text-black  font-bold ">CONTACT US</h6>
            <div className="flex items-center mt-2">
              <FaMapMarkerAlt />
              <p className="ml-2 hover:text-[#DD761C]">Army Institute of Technology, 
               Dighi Hills, Pune</p>
            </div>
            
            <div className="flex items-center mt-2">
              <FaPhone />
              <p className="ml-2 hover:text-[#DD761C]">
            <a href="tel:+918955572387">+91-8955572387</a>
          </p>
              
            </div>
            <div className="flex items-center mt-2">
              <FaEnvelope />
              <p className="ml-2 hover:text-[#DD761C]">
            <a href="mailto:harshnayan35@gmail.com">harshnayan35@gmail.com</a>
          </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Navjeevan Foundation. All rights
          reserved.
        </p>{" "}
        <div className="text-[14px] ">Created By Harsh Nayan</div>
      </div>
    </div>
  );
}
