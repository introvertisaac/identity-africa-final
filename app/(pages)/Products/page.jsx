import React from 'react';
import { FaIdCard, FaSearch, FaUserCheck, FaChartLine, FaBell, FaBusinessTime, FaFileAlt, FaExclamationTriangle, FaShieldAlt, FaGavel } from 'react-icons/fa';

const ProductsSolutions = () => {
  const renderCard = (item, index, totalCards) => (
    <div key={index} className={`p-6 bg-white shadow rounded-lg flex flex-col justify-between h-full ${index === totalCards - 1 && totalCards % 3 === 1 ? 'md:col-span-3' : index >= totalCards - 2 && totalCards % 3 === 2 ? 'md:col-span-3 lg:col-span-1' : ''}`}>
      <div>
        <h4 className="text-xl font-semibold mb-2 font-recoleta">{item.title}</h4>
        <p className='font-satoshi'>{item.content}</p>
      </div>
      <div className="w-16 h-16 bg-[#FFFBF8] rounded-xl flex items-center justify-center mt-4 border border-[#E76C21] flex-shrink-0">
        {React.cloneElement(item.icon, { className: "text-[#E76C21] text-2xl" })}
      </div>
    </div>
  );

  const customerVerificationCards = [
    { title: "ID Verification", content: "Instantly verify government-issued IDs from over 10 countries, ensuring that only legitimate users access your services.", icon: <FaIdCard /> },
    { title: "AML Compliance", content: "Automatically check customers against global watchlists to comply with Anti-Money Laundering (AML) regulations.", icon: <FaSearch /> },
    { title: "KYC Integration", content: "Seamlessly integrate Know Your Customer (KYC) protocols into your onboarding process to verify the identity of your users quickly and accurately.", icon: <FaUserCheck /> },
    { title: "Streamlined Process", content: "Our verification process is designed to be fast and user-friendly, reducing drop-off rates and improving customer satisfaction.", icon: <FaChartLine /> },
    { title: "Real-Time Monitoring", content: "Get instant alerts and updates on verification statuses, allowing you to make informed decisions quickly.", icon: <FaBell /> },
  ];

  const businessVerificationCards = [
    { title: "Business Identity Verification", content: "Verify the legitimacy of businesses by checking their registration details, ownership, and operational status.", icon: <FaBusinessTime /> },
    { title: "Document Verification", content: "Authenticate key documents such as business licenses, financial statements, and tax IDs to ensure credibility.", icon: <FaFileAlt /> },
    { title: "Risk Assessment", content: "Conduct thorough risk assessments to identify potential red flags and prevent fraudulent activities.", icon: <FaExclamationTriangle /> },
    { title: "Regulatory Compliance", content: "Stay ahead of regulatory requirements with our solutions that ensure compliance with international standards and local regulations.", icon: <FaGavel /> },
    { title: "Enhanced Security Protocols", content: "Protect your business from fraud and identity theft with our advanced security features and continuous monitoring.", icon: <FaShieldAlt /> },
  ];

  return (
    <div className="container max-w-full w-[90%] py-8 md:px-20 bg-[#FFFBF8]">
      <section className='pt-28 md:pt-32 w-full flex flex-col items-center bg-[#FFFBF8]'>
        <div className='text-center max-w-[80%] md:max-w-[60%] lg:max-w-[70%] mb-8 '>
          <h2 className="text-4xl font-extrabold max-w-6xl font-recoleta">
            We are providing <span className="text-[#E76C21]">comprehensive solutions</span> tailored <br/> for your needs
          </h2>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-md font-satoshi font-semibold text-black md:mb-4">UNMATCHED SPEED, SECURITY AND ENHANCED USER EXPERIENCE</h2>
        <h3 className="text-4xl font-bold mb-4 font-recoleta">Customer Verification Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-satoshi">
          {customerVerificationCards.map((card, index) => renderCard(card, index, customerVerificationCards.length))}
        </div>
      </section>

      <section>
        <h2 className="text-md font-satoshi font-semibold text-black md:mb-4">COMPREHENSIVE, RELIABLE, COMPLIANT AND SECURE</h2>
        <h3 className="text-4xl font-bold mb-4 font-recoleta">Business Verification Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-satoshi">
          {businessVerificationCards.map((card, index) => renderCard(card, index, businessVerificationCards.length))}
        </div>
      </section>
    </div>
  );
};

export default ProductsSolutions;