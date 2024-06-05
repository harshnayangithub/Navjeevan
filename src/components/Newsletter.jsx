import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='md:flex justify-between max-w-[1240px]  py-[30px] md:py-[70px] mx-auto  '>
      <div className='m-2'>
        <h1 className=' text-[20px] md:text-[40px] font-bold text-white '> Be a Part of our Community</h1>
        <span className='text-white'> Fill out the Volunteer form and be a part of Social-good</span>
      </div>
      <div className=' mx-15px m-2'>
        <input type="text" name="" id=""  className='p-2 text-slate-600 mr-2 sm:w-full rounded' placeholder='Email'/>
        
        <button className='w-[40%] md:w-[32%]  bg-blue-600 hover:scale-120 duration-100 my-2 text-white p-2.5 justify-center rounded'>
            Register
          </button>
        <br/>
        <p className='text-white '> Support Our community read more about our
        <br/>
        <a href="https:/harshnayangithub" className='text-black'> Privacy Policy</a>
        </p>
        </div>
    </div>
    </div>
  )
}
