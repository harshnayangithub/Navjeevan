import React, { useState } from "react";
import Afterheader from "../components/NewsletterV";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";  

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date(),
      });
      setSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <Afterheader a="Contact Us" />
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700">
              We'd love to hear from you! Whether you have questions, need help,
              or just want to share your thoughts or suggestions, feel free to
              reach out to us using the form below.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg mb-8 lg:mb-0 max-w-md mx-auto">
              {submitted ? (
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#df9c00f3] mb-4">
                    Thank you!
                  </h3>
                  <p className="text-lg text-gray-700">
                    Your Response has been Recorded.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df9c00f3]"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-[#df9c00f3] text-white px-6 py-2 rounded-lg hover:bg-[#DD761C] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#df9c00f3] focus:ring-opacity-50"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
            <div className="flex-1 mt-10">
              <h2 className="text-3xl font-bold text-[#df9c00f3] mb-4">
                Contact Information
              </h2>
              <div className="flex items-center mt-2">
                <FaMapMarkerAlt />
                <p className="ml-2 hover:text-[#DD761C]">Army Institute of Technology, Dighi Hills, Pune</p>
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
              <div className="mt-10">
                <h3 className="text-3xl font-bold text-[#df9c00f3] mb-2">Our Social Media</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/harshnayangithub" className="hover:text-[#DD761C]">
                    <FaGithubSquare size={30} />
                  </a>
                  <a href="https://www.instagram.com/harsh.nayan_/" className="hover:text-[#DD761C]">
                    <FaInstagram size={30} />
                  </a>
                  <a href="https://facebook.com/harshnayan" className="hover:text-[#DD761C]">
                    <FaFacebookSquare size={30} />
                  </a>
                  <a href="https://twitter.com/harsh" className="hover:text-[#DD761C]">
                    <FaTwitterSquare size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
