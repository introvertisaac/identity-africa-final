import Head from 'next/head';
import FAQ from '@/app/components/Faq/Faq';
import HeroSection from '@/app/components/Home/HeroSection';
import Features from '@/app/components/Home/Features';
import IndustriesServed from '@/app/components/Home/IndustriesServed';
import Compliance from '@/app/components/Home/Compliance';

export default function Home() {
  return (
    <div className='w-[100%]  py-8  bg-[#FFFBF8]'>
      {/* <Head>
        <title>Identify Africa</title>
        <meta name="description" content="Identify Africa homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="min-h-screen w-full min-w-full bg-[#FFFBF8] py-10 md:pt-32 ">
        <div className="container mx-auto">
          {/* Other sections of your homepage */}
          <HeroSection />
          <Features />
          <IndustriesServed/>
          <Compliance/>
          {/* FAQ Section */}
          <FAQ />
          

          {/* Other sections of your homepage */}
        </div>
      </main>
    </div>
  );
}
