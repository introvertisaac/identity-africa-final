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
    <div className="bg-white md:px-4 py-8 w-full">
      <div className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full inline-block -mt-4">
        THE CONTINENT OF AFRICA
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Africa with Secure Identity Verification
          </h1>
          <p className="text-gray-600 mb-6">
            Effortlessly verify identities with cutting-edge technology tailored for the African market.
          </p>
          <div className="flex space-x-4">
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

      <div className="mt-8 flex justify-start w-2/5">
        <div className="bg-gray-50 rounded-full p-2 flex items-center space-x-4 max-w-xl">
          <Image
            src="/People.png"
            alt="User Avatars"
            width={150}
            height={40}
            className="rounded-full"
          />
          <div className="text-gray-700 pr-6 w-2/3 flex-col items-center justify-center text-center">
            <span className="font-bold text-2xl text-orange-500">300M+</span>
            <p className="text-sm">verifications completed under 2 secs API response type</p>
          </div>
        </div>
      </div>
    </div>
  );
}
