// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Newsletter() {
//   return (
//     <div className='md:flex justify-center max-w-full py-[30px] md:py-[70px] p-10 mx-auto bg-[#df9c00f3]'>
//       <div className='flex flex-col items-center'>
//         <h1 className='text-4xl font-bold text-white mb-8'>
//           Be a Part of our Community
//         </h1>
//         <Link
//           to='/volunteer'
//           className='bg-[#FEB941]   hover:scale-105 p-4 justify-center text-white px-4 py-2 rounded-lg hover:bg-[#DD761C] transition duration-300'
//         >
//           Volunteer Now
//         </Link>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../assests/img/About.jpeg';

export default function Newsletter() {
  return (
    <div className='md:flex justify-center items-center max-w-full m-100px py-[30px] md:py-[130px] p-30px mx-auto bg-cover bg-center' style={{ backgroundImage: `url(${Home})` }}>
      <div className='flex flex-col items-center bg-black bg-opacity-50 p-10 rounded-lg'>
        <h1 className='text-[40px] md:text-[50px] font-bold text-white mb-8 text-center'>
          Be a Part of our Community.
        </h1>
        <button className='bg-[#df9c00f3] hover:bg-[#DD761C] hover:scale-105 flex items-center justify-center text-white text-xl p-3 rounded-lg'>
          <Link to="/volunteer" className="block h-full">
            Volunteer Now
          </Link>
        </button>
      </div>
    </div>
  );
}
