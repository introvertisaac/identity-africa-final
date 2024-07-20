// pages/products-solutions.js

import { FaIdCard, FaSearch, FaUserCheck, FaChartLine, FaBell, FaBusinessTime, FaFileAlt, FaExclamationTriangle, FaShieldAlt, FaGavel } from 'react-icons/fa';

const iconBoxStyle = "p-6 rounded-lg border-2 border-orange-500 bg-orange-100 bg-opacity-50 flex flex-col items-center shadow-lg";

const ProductsSolutions = () => {
  return (
    <div className="container  max-w-full w-[90%]  py-8 md:px-20 bg-[#FFFBF8]">
      <section className='pt-28 md:pt-32 w-full flex flex-col items-center bg-[#FFFBF8]'>
      <div className='text-center max-w-[80%] md:max-w-[60%] lg:max-w-[70%] mb-8 '>
        <h2 className="text-4xl font-bold">
            We are providing <span className="text-[#E76C21]">comprehensive solutions</span> tailored <br/> for your needs
        </h2>
    </div>
      </section>

      <section className="mb-12">
      <h2 className="text-sm font-semibold text-gray-600 mb-4">UNMATCHED SPEED,SECURITY AND ENHANCED USER EXPERIENCE</h2>
  <h3 className="text-4xl font-bold mb-6">Customer Verification Solutions</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="p-8 pb-8 bg-white shadow rounded-lg">
      <h4 className="text-xl font-semibold mb-2">ID Verification</h4>
      <p>Instantly verify government-issued IDs from over 10 countries, ensuring that only legitimate users access your services.</p>
      <FaIdCard className="text-4xl text-orange-600 mt-4 md:mt-10" />
    </div>
    <div className="p-6 bg-white shadow rounded-lg">
      <h4 className="text-xl font-semibold mb-2">AML Compliance</h4>
      <p>Automatically check customers against global watchlists to comply with Anti-Money Laundering (AML) regulations.</p>
      <FaSearch className="text-4xl text-orange-600 mt-4 md:mt-10" />
    </div>
    <div className="p-6 bg-white shadow rounded-lg">
      <h4 className="text-xl font-semibold mb-2">KYC Integration</h4>
      <p>Seamlessly integrate Know Your Customer (KYC) protocols into your onboarding process to verify the identity of your users quickly and accurately.</p>
      <FaUserCheck className="text-4xl text-orange-600 mt-4 md:mt-10" />
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <div className="p-6 bg-white shadow rounded-lg">
      <h4 className="text-xl font-semibold mb-2">Streamlined Process</h4>
      <p>Our verification process is designed to be fast and user-friendly, reducing drop-off rates and improving customer satisfaction.</p>
      <FaChartLine className="text-4xl text-orange-600 mt-4 md:mt-10" />
    </div>
    <div className="p-6 bg-white shadow rounded-lg">
      <h4 className="text-xl font-semibold mb-2">Real-Time Monitoring</h4>
      <p>Get instant alerts and updates on verification statuses, allowing you to make informed decisions quickly.</p>
      <FaBell className="text-4xl text-orange-600 mt-4 md:mt-10" />
    </div>
  </div>
</section>
<section>
<h2 className="text-sm font-semibold text-gray-600 mb-4">COMPREHENSIVE, RELIABLE, COMPLIANT AND SECURE</h2>
  <h3 className="text-4xl font-bold mb-6">Business Verification Solutions</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="p-6 bg-white shadow rounded-lg">
      <h4 className="text-xl font-semibold mb-2">Business Identity Verification</h4>
      <p>Verify the legitimacy of businesses by checking their registration details, ownership, and operational status.</p>
      <FaBusinessTime className="text-4xl text-orange-600 mt-4  md:mt-10" />
    </div>
    <div className="p-6 bg-white shadow rounded-lg">
      <h4 className="text-xl font-semibold mb-2">Document Verification</h4>
      <p>Authenticate key documents such as business licenses, financial statements, and tax IDs to ensure credibility.</p>
      <FaFileAlt className="text-4xl text-orange-600 mt-4 md:mt-10" />
    </div>
    <div className="p-6 bg-white shadow rounded-lg">
      <h4 className="text-xl font-semibold mb-2">Risk Assessment</h4>
      <p>Conduct thorough risk assessments to identify potential red flags and prevent fraudulent activities.</p>
      <FaExclamationTriangle className="text-4xl text-orange-600 mt-4 md:mt-10" />
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <div className="p-6 bg-white shadow rounded-lg">
      <h4 className="text-xl font-semibold mb-2">Regulatory Compliance</h4>
      <p>Stay ahead of regulatory requirements with our solutions that ensure compliance with international standards and local regulations.</p>
      <FaGavel className="text-4xl text-orange-600 mt-4 md:mt-10" />
    </div>
    <div className="p-6 bg-white shadow rounded-lg">
      <h4 className="text-xl font-semibold mb-2">Enhanced Security Protocols</h4>
      <p>Protect your business from fraud and identity theft with our advanced security features and continuous monitoring.</p>
      <FaShieldAlt className="text-4xl text-orange-600 mt-4 md:mt-10" />
    </div>
  </div>
</section>
    </div>
  );
};

export default ProductsSolutions;
