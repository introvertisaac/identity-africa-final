import { FaLock, FaShieldAlt } from 'react-icons/fa';

const SecurityCompliance = () => {
  return (
    // <div className='container mx-auto px-4 py-16 max-w-6xl'>

    
    <div className="">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Security & Compliance</h1>
      
      <p className="mb-8 ">
        At Identify Africa, we prioritize the highest standards of security and compliance to safeguard your operations and protect user data. Our robust measures ensure adherence to global regulatory frameworks, providing peace of mind in an ever-evolving digital landscape.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-center bg-white p-6 shadow-md rounded-lg">
          <FaLock className="text-orange-500 text-3xl flex-shrink-0" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold mb-2">Regulatory Adherence</h2>
            <p>Stay compliant with stringent international and local regulations, including GDPR, CCPA, and industry-specific standards.</p>
          </div>
        </div>
        
        <div className="flex items-center bg-white p-6 shadow-md rounded-lg">
          <FaShieldAlt className="text-orange-500 text-3xl flex-shrink-0" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
            <p>Implement advanced encryption protocols and secure storage solutions to protect sensitive user information.</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SecurityCompliance;
