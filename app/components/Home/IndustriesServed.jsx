import { FaMobileAlt, FaBuilding, FaShoppingCart, FaLeaf } from 'react-icons/fa';

const industries = [
  { Icon: FaMobileAlt, name: 'Fintech Companies' },
  { Icon: FaBuilding, name: 'Banking Institutions' },
  { Icon: FaShoppingCart, name: 'E-commerce Platforms' },
  { Icon: FaLeaf, name: 'Digital Lending' },
];

export default function IndustriesServed() {
  return (
    <section className=" px-4 py-16 ">
      <h2 className="text-sm font-semibold text-gray-600 mb-4">WHO WE SERVE</h2>
      
      <h1 className="text-4xl md:text-4xl font-bold mb-16 max-w-4xl">
        Securing digital interactions across diverse industries in Africa
      </h1>
      
      <div className="flex flex-wrap justify-center md:justify-between items-stretch space-y-8 md:space-y-0 md:space-x-8">
        {industries.map(({ Icon, name }, index) => (
          <div key={index} className="flex flex-col items-center w-full md:w-1/5 bg-white p-8 relative">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Icon className="text-orange-500 text-3xl" />
            </div>
            <p className="text-center font-semibold">{name}</p>
            <div className="absolute bottom-4 right-4">
              <svg className="w-6 h-6 bg-white rounded-full p-1" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
