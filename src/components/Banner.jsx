import React from 'react';
import { ReactTyped } from 'react-typed';

import { Link } from 'react-router-dom';
export default function Banner() {
  return (
    <div
      className='w-[full] h-[700px]  bg-cover bg-center relative py-[120px]'
      style={{ backgroundImage: `url(https://images.pexels.com/photos/18515366/pexels-photo-18515366.jpeg?cs=srgb&dl=pexels-wadaa-alaumry-739227478-18515366.jpg&fm=jpg` }}
    >
      <div className=' bg-opacity-70 w-full h-full flex items-center justify-center '>
        <div className='max-w-[1240px] py-[30px] mx-auto text-center font-bold'>
          <div className='text-xl md:text-4xl py-[40px] text-white'>
          Creating a World Free from Child Labour
          </div>
          <h2 className='text-white text-3xl md:text-[60px] md:p-[30px] py-[30px]'>
          Every Child Deserves a Childhood.
          </h2>
          <div className='text-[20px] md:text-[50px] md:p-[24px] text-white py-[30px]'>
          United Against
            <ReactTyped
              className='pl-2'
              strings={['Child Labour', 'Child Abuse', 'Child Trafficking']}
              typeSpeed={70}
              loop={true}
              backSpeed={70}
            />
          </div>
          <div className='py-4 flex space-x-4 md:p-2 p-4 justify-center'>
            <button className='w-full md:w-1/4 bg-[#df9c00f3] hover:bg-[#DD761C] hover:scale-105 transition-transform duration-200 my-2 text-white p-3.5 justify-center rounded'>
            <Link to="/ourinitiatives" className='block w-full h-full'>
          Learn More
        </Link>
            </button>
            <button className="w-full md:w-1/4 bg-[#df9c00f3] hover:bg-[#DD761C] hover:scale-105 transition-transform duration-200 my-2 text-white p-3.5 justify-center rounded">
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


// import React, { useState, useEffect } from 'react';
// import Home1 from "../assests/img/Flex1.jpeg";
// import Home2 from "../assests/img/Flex2.jpeg";
// import Home3 from "../assests/img/Flex3.jpeg";
// import { Link } from 'react-router-dom';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const images = [Home1, Home2, Home3];

// export default function Banner() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextImage, 3000); // Change image every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='relative w-full h-screen'>
//       <div
//         className='w-full h-full bg-cover bg-center'
//         style={{
//           backgroundImage: `url(${images[currentImageIndex]})`,
//           transition: 'background-image 1s ease-in-out',
//         }}
//       ></div>
//       <div className='absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center'>
//         <div className='max-w-[1240px] py-[30px] mx-auto text-center font-bold'>
//           <div className='text-xl md:text-4xl py-[40px] text-white'>
//             Creating a World Free from Child Labour
//           </div>
//           <h2 className='text-white text-3xl md:text-[60px] md:p-[30px] py-[30px]'>
//             Every Child Deserves a Childhood.
//           </h2>
//           <div className='text-[20px] md:text-[50px] md:p-[24px] text-white py-[30px]'>
//             United Against Child Labour, Child Abuse, and Child Trafficking
//           </div>
//           <div className='py-4 flex space-x-4 justify-center'>
//              <button className='w-full md:w-1/4 bg-[#df9c00f3] hover:bg-[#DD761C] hover:scale-105 transition-transform duration-200 my-2 text-white p-3.5 justify-center rounded'>
//              <Link to="/ourinitiatives" className='block w-full h-full'>
//            Learn More
//          </Link>
//              </button>
//              <button className="w-full md:w-1/4 bg-[#df9c00f3] hover:bg-[#DD761C] hover:scale-105 transition-transform duration-200 my-2 text-white p-3.5 justify-center rounded">
//                <Link to="/donate" className="block w-full h-full">
//                  Donate Now
//                </Link>
//             </button>
      
//            </div>
//         </div>
//       </div>
//       <div className='absolute inset-0 flex items-center justify-between px-4'>
//         <button
//           className='text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75'
//           onClick={prevImage}
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           className='text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75'
//           onClick={nextImage}
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//       <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-gray-400'}`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }