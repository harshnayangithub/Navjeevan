import React from 'react'
import ChildP from '../assests/img/ChildP.jpeg';
export default function Whatwedo() {
  return (
    <div className=' max-w-[1240px] p-3  mx-auto my-10 md:grid grid-cols-2'>
      <div className='col-span-1 md:w-[80%] text-center '>
        <img src={ChildP} alt="" className='inline ' />
      </div>
      <div className=' h-[200px] col-span-1 justify-center my-10 flex flex-col'>

        <h1 className='text-[#00df9a] font-bold   mb- text-[20px] md:text-[30px]'> What We Do? </h1>
        <p className='my-3 text-justify'>
            
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam maxime voluptatem, corporis commodi, itaque quod alias ab perferendis cupiditate inventore est ut neque vitae quia asperiores ex atque accusantium!
              
        </p>
        <button className='w-[40%] md:w-[20%]  bg-blue-600 hover:scale-120 duration-100 my-2 text-white p-2.5 justify-center rounded'>
            Learn More
          </button>
      </div>
    </div>
  )
}
