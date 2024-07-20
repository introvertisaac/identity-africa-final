'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4">
      <button
        className="w-full text-left p-6 bg-[FAE2D3] hover:bg-peach-200 transition-colors duration-200 flex justify-between items-center"
        onClick={toggleOpen}
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          isOpen ? 'open' : ''
        }`}
      >
        <div className="p-4 bg-white">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How can I get started with Identify Africa?",
      answer: "Simply contact us through our website, email, or phone to learn more about our customer and business verification solutions. Our experts are ready to help you tailor our services to your needs."
    },
    {
      question: "How does your ID verification work?",
      answer: "Our ID verification system instantly verifies government-issued IDs from over 200 countries using state-of-the-art AI technology, ensuring high accuracy and security."
    },
    {
      question: "Who can benefit from your services?",
      answer: "Our solutions are ideal for fintechs, financial institutions, startups, investors, and individual professional or academic researchers looking to understand and validate data within the African continent."
    },
    {
      question: "How do you protect user data?",
      answer: "We implement advanced encryption protocols and secure storage solutions to protect sensitive user information, coupled with real-time monitoring to detect and mitigate potential threats."
    },
    {
      question: "What regulatory standards do you comply with?",
      answer: "Identify Africa ensures compliance with local and international regulations, including GDPR, CCPA, and various industry-specific standards, to meet your KYC/AML requirements."
    },
    {
      question: "What makes Identity Africa different from its competitors?",
      answer: "Our differentiation factor is our unified secure API-based verification, validation, and authentication services, providing seamless and efficient access to crucial data points across Africa."
    }
  ];

  return (
    <div className="p-6 md:p-8 lg:p-10 max-w-7xl mx-auto w-full">
      <h2 className="text-sm font-semibold text-gray-600 mb-4">FREQUENTLY ASKED QUESTIONS</h2>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 ">Need Help? Find Answers Here</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FAQItem 
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
