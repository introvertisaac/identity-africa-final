import Image from 'next/image';

export default function Features() {
  return (
    <section className="mt-10">
      <h2 className="text-sm font-semibold text-gray-600 md:mb-4">WHAT SETS US APART</h2>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-12 max-w-3xl">
        Secure, compliant, and efficient identity verification solutions
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4 flex flex-col">
          <div className="rounded-lg overflow-hidden flex-grow">
            <video
              src="/id.mp4"
              alt="Digital Driver's License"
              className="w-full h-64 object-cover"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="p-6 flex flex-col justify-end">
            <h3 className="text-xl font-bold mb-2">Accurate Verification</h3>
            <p className="text-gray-600">
              Leverage our state-of-the-art technology, which is specially designed for African faces, ensuring a 99.8% accuracy rate in identity verification.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4 flex flex-col">
          <div className="rounded-lg overflow-hidden flex-grow">
            <video
              src="/verification.mp4"
              alt="Compliance Letter"
              className="w-full h-64 object-cover"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="p-6 flex flex-col justify-end">
            <h3 className="text-xl font-bold mb-2">Compliance at Scale</h3>
            <p className="text-gray-600">
              Stay ahead with our comprehensive solutions that meet local & international regulatory requirements, ensuring seamless KYC/AML compliance.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4 flex flex-col">
          <div className="rounded-lg overflow-hidden flex-grow">
            <video
              src="/detection.mp4"
              alt="Fraud Detection"
              className="w-full h-50 object-cover"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="p-6 flex flex-col justify-end">
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
