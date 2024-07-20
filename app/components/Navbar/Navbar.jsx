'use client';

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import GetInTouchModal from '@/app/Forms/Get-in-Touch/GetInTouch';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const currentPath = router.asPath;

  const linkClasses = (path) => 
    `relative group transition-colors duration-300 ease-in-out ${
      currentPath === path ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
    }`;

  return (
    <>
      <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
        <div className="container mx-auto px-2 md:px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="Identify Africa" className="h-12" />
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            {['/About', '/Products', '/Developers'].map((path) => (
              <Link
                key={path}
                href={path}
                className={linkClasses(path)}
              >
                <span className="relative inline-block">
                  {path === '/About' && 'About Us'}
                  {path === '/Products' && 'Products & Solutions'}
                  {path === '/Developers' && 'Developers'}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform origin-left transition-all duration-300 ease-in-out scale-x-0 group-hover:scale-x-100"></span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform origin-left transition-all duration-300 ease-in-out ${currentPath === path ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex">
            <button onClick={toggleModal} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out rounded-md">
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
            {['/About', '/Products', '/Developers'].map((path) => (
              <Link
                key={path}
                href={path}
                className={`block px-4 py-2 hover:bg-gray-100 ${
                  currentPath === path ? 'text-orange-500' : 'text-gray-700'
                } transition-colors duration-300 ease-in-out`}
              >
                {path === '/About' && 'About Us'}
                {path === '/Products' && 'Products & Solutions'}
                {path === '/Developers' && 'Developers'}
              </Link>
            ))}
            <button
              onClick={toggleModal}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 bg-[#E76C21] text-white rounded-md transition duration-300 ease-in-out rounded-md"
            >
              Get In Touch
            </button>
          </div>
        )}
      </nav>

      <GetInTouchModal isOpen={modalOpen} onClose={toggleModal} />
    </>
  );
};

export default Navbar;