"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  const handleGetStartedClick = () => {
    router.push('/Developers');
  };
  const handleLearnMoreClick = () => {
    router.push('/Products');
  };

  return (
    <div className="bg-white md:px-4 py-2 w-full">
      <div className="flex flex-col md:flex-row items-start justify-between mt-14 px-4">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col">
          <div className="bg-[#FAE2D3] text-[#B9561A] px-3 text-lg py-1 rounded-full inline-block mb-6">
            <p className='px-2'>THE CONTINENT OF AFRICA</p>
          </div> 
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Africa with Secure Identity Verification
          </h1>
          <p className="text-gray-600 mb-6">
            Effortlessly verify identities with cutting-edge technology tailored for the African market.
          </p>
          <div className="flex space-x-4 mb-8">
            <button
              className="bg-orange-500 text-white px-6 py-2 rounded-full"
              onClick={handleGetStartedClick}
            >
              Get Started →
            </button>
            <button
              className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
          </div>
          
          <div className="mt-14">
            <div className="bg-white rounded-full p-2 flex items-center space-x-4 max-w-xl border border-[#FAE2D3] ">
              <Image
                src="/People.png"
                alt="User Avatars"
                width={200}
                height={80}
                className="rounded-full"
              />
              <div className="text-gray-700 pr-6 w-2/3 flex-col items-center justify-center text-center">
                <span className="font-bold text-2xl text-[#E76C21]">300M+</span>
                <p className="text-sm text-black">verifications completed under 2 secs API response type</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <Image
            src="/map.svg"
            alt="Africa Map with Verification Icons"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}