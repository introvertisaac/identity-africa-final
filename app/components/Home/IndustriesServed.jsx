'use client'
import React, { useState } from 'react';
import { FaMobileAlt, FaBuilding, FaShoppingCart, FaLeaf, FaPlus, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  {
    Icon: FaMobileAlt,
    name: 'Fintech Companies',
    description: 'Empowering fintech startups and established financial institutions with robust KYC and AML compliance solutions, enabling secure and seamless financial transactions.',
  },
  {
    Icon: FaBuilding,
    name: 'Banking Institutions',
    description: 'Providing comprehensive identity verification and compliance solutions to banks, ensuring secure and efficient customer onboarding and transaction monitoring.',
  },
  {
    Icon: FaShoppingCart,
    name: 'E-commerce Platforms',
    description: 'Supporting e-commerce businesses with identity verification and fraud detection solutions to protect against fraudulent activities and ensure safe online transactions.',
  },
  {
    Icon: FaLeaf,
    name: 'Digital Lending',
    description: 'Enabling digital lending platforms with accurate identity verification and compliance solutions, facilitating secure and compliant lending processes.',
  },
];

function IndustryCard({ Icon, name, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-start w-full md:w-[23%] bg-white p-6 relative transition-all duration-500 shadow-lg rounded-lg h-72 mx-2 md:mx-0"
      layout
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            className="flex flex-col items-start w-full h-full justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Icon className="text-orange-500 text-3xl" />
            </div>
            <p className="font-semibold mb-8">{name}</p>
            <div
              className="cursor-pointer absolute bottom-6 right-6"
              onClick={() => setIsExpanded(true)}
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
                <FaPlus className="text-gray-500 text-sm" />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="absolute inset-0 bg-orange-500 text-white p-6 flex flex-col items-start justify-start rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
              <Icon className="text-orange-500 text-3xl" />
            </div>
            <p className="font-semibold mb-4">{name}</p>
            <p className="text-sm">{description}</p>
            <div
              className="cursor-pointer absolute bottom-6 right-6"
              onClick={() => setIsExpanded(true)}
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center border-2 border-black">
                <FaPlus className="text-white text-sm" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function IndustriesServed() {
  return (
    <section className="py-16 px-4 md:px-0">
      <h2 className="text-sm font-semibold text-gray-600 mb-4">WHO WE SERVE</h2>
      <h1 className="text-4xl md:text-4xl font-bold mb-16 max-w-4xl">
        Securing digital interactions across diverse industries in Africa
      </h1>
      <div className="flex flex-wrap justify-center md:justify-between items-stretch space-y-8 md:space-y-0 md:space-x-2">
        {industries.map(({ Icon, name, description }, index) => (
          <IndustryCard key={index} Icon={Icon} name={name} description={description} />
        ))}
      </div>
    </section>
  );
}