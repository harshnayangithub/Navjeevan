import React from 'react';
import Whatwedo from "../components/NewsletterV"
import { Link } from "react-router-dom";

  export default function Plans() {
    return (
      <>
      <Whatwedo/>
    <div className='w-full py-1 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto'>
        
        <p className='text-center font-bold text-xl mt-10 mb-8'>
          Join us in our mission to protect children against labor, abuse, and trafficking. Your support can make a significant impact.
        </p>

        <div className='md:grid grid-cols-1 gap-8'>
          {/* Volunteer Information */}
          <div className='p-4 bg-gray-100 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-bold text-[#df9c00f3] mb-4'>
              Why Volunteer?</h3>
            <p className='mb-4'>
              Volunteering with us can be a profoundly rewarding experience. Here are some reasons why you should consider joining our cause:
            </p>
            <ul className='list-disc list-inside'>
              <li className='py-2'>Help eradicate child labor and give children a chance to learn and grow.</li>
              <li className='py-2'>Support efforts to rescue children from abusive environments and provide them with a safe haven.</li>
              <li className='py-2'>Become a part of a community dedicated to ending child trafficking and giving victims a new start.</li>
              <li className='py-2'>Gain valuable experience in social work, community organizing, and advocacy.</li>
              <li className='py-2'>Connect with like-minded individuals who are passionate about protecting children.</li>
              <li className='py-2'>Receive training and mentorship from experienced professionals in the field.</li>
              <li className='py-2'>Be recognized for your efforts and make a tangible impact on the lives of children in need.</li>
            </ul>
          </div>

          

        <div className='md:grid grid-cols-2 gap-8 mt-8'>
          {/* Image placeholders */}
          <div className='p-4'>
            <img
              src='https://static.vecteezy.com/system/resources/thumbnails/027/436/015/small_2x/a-underage-child-is-working-on-harsh-condition-world-day-against-child-labor-ai-generative-photo.jpg' // replace with your actual image path
              alt='Child Labor'
              className='rounded-lg w-full object-cover shadow-lg'
            />
          </div>
          <div className='p-4'>
            <img
              src='https://static.vecteezy.com/system/resources/thumbnails/027/436/016/small_2x/a-underage-child-is-working-on-harsh-condition-world-day-against-child-labor-ai-generative-photo.jpg' // replace with your actual image path
              alt='Child Abuse'
              className='rounded-lg w-full object-cover shadow-lg'
            />
          </div>
        </div>
        <div className='md:grid grid-cols-2 gap-8 mt-8'>
          {/* Image placeholders */}
          <div className='p-4'>
            <img
              src='https://cdn.pixabay.com/photo/2023/08/19/06/55/ai-generated-8199894_1280.jpg'
              alt='Child Labor'
              className='rounded-lg w-full object-cover shadow-lg'
            />
          </div>
          <div className='p-4'>
            <img
              src='https://cdn.pixabay.com/photo/2023/08/19/06/56/ai-generated-8199896_1280.jpg'
              alt='Child Abuse'
              className='rounded-lg w-full object-cover shadow-lg'
            />
          </div>
        </div>
        <div className='p-2 mt-6 flex items-center justify-center'>
            <button className='w-1/7 bg-[#df9c00f3] hover:bg-[#DD761C]  flex items-center justify-center text-white text-xl p-3.5 rounded-lg'>
            <Link to="https://forms.gle/h9VPVK9KUMmn1Sn37" className="block  h-full">
                Volunteer Form
              </Link>
            </button>
          </div>
        </div>

          {/* Volunteer Form
          <div className='bg-gray-100 p-8 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-bold mb-4'>Sign Up to Volunteer</h3>
            {submitted ? (
              <div className='text-green-600 text-xl text-center'>
                Your response has been recorded. Thank you for volunteering!
              </div>
            ) : (
              <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
                <input
                  type='text'
                  name='fullName'
                  placeholder='Full Name'
                  value={formData.fullName}
                  onChange={handleChange}
                  className='p-3 rounded border border-gray-300'
                  required
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                  className='p-3 rounded border border-gray-300'
                  required
                />
                <input
                  type='tel'
                  name='phone'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                  className='p-3 rounded border border-gray-300'
                  required
                />
                <textarea
                  name='message'
                  placeholder='Tell us why you want to volunteer'
                  rows='4'
                  value={formData.message}
                  onChange={handleChange}
                  className='p-3 rounded border border-gray-300'
                  required
                />
                <button className='w-full bg-[#df9c00f3] hover:bg-[#DD761C] text-white p-3 rounded'>
                  Submit
                </button>
              </form>
            )}
          </div> */}
        </div>
      </div>
      </>
  );
}


// https://forms.gle/h9VPVK9KUMmn1Sn37

//import ChildP from '../assests/img/Childl.jpeg';
// export default function Volunteer() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });
  // const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Simulate form submission
  //   setSubmitted(true);
  //   // You can add actual form submission logic here (e.g., sending data to a server)
  // };