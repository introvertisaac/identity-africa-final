import Image from 'next/image';

export default function Features() {
  return (
    <section className="mt-10">
      <h2 className="text-sm font-semibold text-gray-600 md:mb-4">WHAT SETS US APART</h2>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-12 max-w-3xl">
        Secure, compliant, and efficient identity verification solutions
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className='bg-white'>
          <div className="p-4 rounded-lg mb-4">
            <Image
              src="/license.png"
              alt="Digital Driver's License"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded"
            />
          </div>
          <div className='p-6'>
          <h3 className="text-xl font-bold mb-2">Accurate Verification</h3>
          <p className="text-gray-600">
            Leverage our state-of-the-art technology, which is specially designed for African faces, ensuring a 99.8% accuracy rate in identity verification.
          </p>
          </div>
        </div>
        
        <div className='bg-white'>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <Image
              src="/compliance.png"
              alt="Compliance Letter"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded"
            />
          </div>
          <div className='p-6'>
          <h3 className="text-xl font-bold mb-2">Compliance at Scale</h3>
          <p className="text-gray-600">
            Stay ahead with our comprehensive solutions that meet local & international regulatory requirements, ensuring seamless KYC/AML compliance.
          </p>
          </div>
        </div>
        
        <div className='bg-white'>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <Image
              src="/detector.png"
              alt="Fraud Detection"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded"
            />
          </div>
          <div className='p-6'>
          <h3 className="text-xl font-bold mb-2">Fraud Detection</h3>
          <p className="text-gray-600">
            Protect your business with advanced fraud detection techniques, including government checks to prevent identity theft and fraud.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
