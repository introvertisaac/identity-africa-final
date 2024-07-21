import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2E1607] text-white w-full md:mt-10">
      <div className="container mx-auto px-2 md:px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center md:text-left md:mr-6">
            <img src="/white-logo.png" alt="Identify Africa" className="h-12 mx-auto md:mx-0" />
            <p className="mt-4">We aim to establish a global benchmark in secure identity verification and data validation, enhancing trust and security across digital interactions and empowering businesses to thrive in the African market, one verification at a time.</p>
            <p className="mt-2">Licensed by <a href="https://odpc.go.ke" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ODPC</a></p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/products" className="hover:underline">Products & Solutions</a></li>
              <li><a href="/developers" className="hover:underline">Developers</a></li>
              <li><a href="#contact" className="hover:underline">Get in touch</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3">Connect With Us</h3>
            <ul>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className='md:mb-3'>Email Address: <a href="mailto:info@identifyafrica.io" className="hover:underline"><br/>info@identifyafrica.io</a></p>
            <p className='md:mb-3'>Phone Number: <br/>+254 722 273 324</p>
            <p className='md:mb-3'>Physical Address: <br/>The Address, Muthangari Drive, Nairobi, Kenya</p>
          </div>
        </div>
      </div>
      <div className="bg-custom-white text-black w-full">
        <div className="container mx-auto px-2 md:px-4 py-4 flex flex-col md:flex-row justify-between text-sm">
          <p className="mb-2 md:mb-0 text-center md:text-left">&copy; Copyright 2024. Identify Africa</p>
          <div className="flex justify-center md:justify-end">
            <a href="#terms" className="hover:underline mx-2">Terms & Conditions</a>
            <a href="#privacy" className="hover:underline mx-2">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
