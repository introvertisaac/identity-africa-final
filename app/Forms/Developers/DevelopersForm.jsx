import React from 'react';

const DevelopersForm = () => {
  return (
    <div className="flex justify-center items-center bg-[#FFFBF8] p-4 w-full max-w-full font-satoshi">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[94%]">
        <h2 className="text-2xl font-semibold mb-6 p-2">Personal Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Full Name<span className="text-red-500">*</span></label>
            <input className="border focus:border-none outline-none p-4 bg-gray-50 rounded w-full" type="text" placeholder="Please enter your full name" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Phone Number<span className="text-red-500">*</span></label>
            <input className="border  focus:border-none outline-none p-4 bg-gray-50 rounded w-full" type="tel" placeholder="Please enter your phone number" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Email Address<span className="text-red-500">*</span></label>
            <input className="border  focus:border-none outline-none p-4 bg-gray-50 rounded w-full" type="email" placeholder="Please enter your email address" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Job Title</label>
            <input className="border focus:border-none outline-none p-4 bg-gray-50 rounded w-full" type="text" placeholder="Please enter your job title" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Company Website<span className="text-red-500">*</span></label>
            <input className="border p-4 focus:border-none outline-none  bg-gray-50 rounded w-full" type="url" placeholder="Please enter your company website" required />
          </div>
          <div className="relative">
            <label className="block text-gray-700 mb-2 font-semibold">Industry<span className="text-red-500">*</span></label>
            <select className="border p-4 bg-gray-50 rounded w-full pr-8  focus:border-none outline-none appearance-none" required>
              <option value="">Please select the industry</option>
              {/* Add industry options here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-6 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.59 7.41L10 11.83l4.41-4.42L16 9l-6 6-6-6z"/></svg>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Company Size<span className="text-red-500">*</span></label>
            <input className="border p-4 bg-gray-50 rounded focus:border-none outline-none  w-full" type="text" placeholder="Please enter your company size" required />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Project Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Project Name</label>
            <input className="border p-4 bg-gray-50 focus:border-none outline-none  rounded w-full" type="text" placeholder="Please enter your project name" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Project Description</label>
            <input className="border p-4 bg-gray-50 focus:border-none outline-none  rounded w-full" type="text" placeholder="Please enter your project description" />
          </div>
          <div className="relative">
            <label className="block text-gray-700 mb-2 font-semibold">APIs of interest<span className="text-red-500">*</span></label>
            <select className="border p-4 bg-gray-50  focus:border-none outline-none rounded w-full pr-8 appearance-none" required>
              <option value="">Please select all the APIs of your interest</option>
              {/* Add API options here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-6 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.59 7.41L10 11.83l4.41-4.42L16 9l-6 6-6-6z"/></svg>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Expected volume of requests per day<span className="text-red-500">*</span></label>
            <input className="border p-4 focus:border-none outline-none  bg-gray-50 rounded w-full" type="text" placeholder="Please enter the expected volume of requests" required />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Additional Information</h2>
        <div>
          <label className="block text-gray-700 mb-2 font-semibold">Comments & Questions</label>
          <textarea className="border p-2 focus:border-none outline-none bg-gray-50 rounded w-full mb-6" rows="2" placeholder="Add any comments or questions"></textarea>
        </div>
        <div className="flex items-center justify-center w-full">
          <button type="submit" className="bg-orange-500 text-white px-8 py-4 rounded-3xl">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default DevelopersForm;
