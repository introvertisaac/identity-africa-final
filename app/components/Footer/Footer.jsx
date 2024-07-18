// components/GetInTouchModal.js
import React from 'react';
import { FiX } from 'react-icons/fi';

const GetInTouchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[90%] h-[90%] p-6 md:p-10 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FiX className="text-2xl" />
        </button>
        <h2 className="text-white bg-orange-500 p-4 rounded-t-lg text-xl md:text-2xl font-semibold mb-6">
          GET IN TOUCH WITH US
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-50 p-3 placeholder-gray-500"
                placeholder="Please enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="phoneNumber">Phone Number*</label>
              <input
                type="tel"
                id="phoneNumber"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-50 p-3 placeholder-gray-500"
                placeholder="Please enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-50 p-3 placeholder-gray-500"
                placeholder="Please enter your email address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="contactMethod">Preferred Contact Method*</label>
              <select
                id="contactMethod"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-50 p-3 placeholder-gray-500"
                required
              >
                <option value="">Please select your preferred contact method</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-50 p-3 placeholder-gray-500"
              placeholder="Please enter your message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouchModal;
