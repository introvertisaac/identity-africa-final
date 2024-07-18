"use client"
// components/Navbar.js
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import GetInTouchModal from '@/app/Forms/Get-in-Touch/GetInTouch';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
        <div className="container mx-auto px-2 md:px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Identify Africa" className="h-12" />
          </div>
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#products" className="hover:underline">Products & Solutions</a>
            <a href="#developers" className="hover:underline">Developers</a>
          </div>
          <div className="hidden md:flex">
            <button onClick={toggleModal} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Get In Touch
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNav} className="focus:outline-none">
              {navOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="md:hidden bg-white shadow-md w-full">
            <a href="#about" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
            <a href="#products" className="block px-4 py-2 hover:bg-gray-100">Products & Solutions</a>
            <a href="#developers" className="block px-4 py-2 hover:bg-gray-100">Developers</a>
            <button onClick={toggleModal} className="block w-full text-left px-4 py-2 hover:bg-gray-100 bg-orange-500 text-white rounded-md">Get In Touch</button>
          </div>
        )}
      </nav>

      <GetInTouchModal isOpen={modalOpen} onClose={toggleModal} />
    </>
  );
};

export default Navbar;
