
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { IoMdDocument, IoIosWallet, IoMdPerson   } from "react-icons/io";
import { HiBuildingOffice2  } from "react-icons/hi2";

import { FaCheckCircle, FaChartBar, FaIdCard, FaUsers, FaClipboardList, FaFileAlt, FaUser, FaFile } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className=" px-4 py-8 bg-[#FFFBF8]   max-w-full  md:px-20 ">
            <section className='pt-32 w-full flex flex-col items-center bg-[#FFFBF8]'>
                <div className='text-center min-w-full md:max-w-[60%] lg:max-w-[80%] mb-8 flex justify-center items-center align-middle '>
                    <h2 className="text-4xl font-extrabold max-w-6xl font-recoleta">
                        We are here to ensure <span className="text-[#E76C21]">secure</span> and<span className="text-[#E76C21]"> seamless </span>digital interactions for your business
                    </h2>
                </div>
            </section>

            <section className="mb-12">
                <div className="grid grid-cols-5 gap-4 mb-12">
                    <img src="/collage1.png" alt="Image 1" className="col-span-3 w-full h-64 object-cover rounded-lg" />
                    <img src="/collage2.png" alt="Image 2" className="col-span-2 w-full h-64 object-cover rounded-lg" />
                </div>
                <div className="grid grid-cols-5 gap-4 mb-12">
                    <img src="/collage3.png" alt="Image 4" className="col-span-2 w-full h-64 object-cover rounded-lg" />
                    <img src="/collage4.png" alt="Image 5" className="col-span-3 w-full h-64 object-cover rounded-lg" />
                </div>
            </section>

            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                    <div className="md:col-span-4 flex flex-col">
                        <div className="mb-8 md:mb-0 flex-grow">
                            <h2 className="text-md font-satoshi font-semibold text-black md:mb-4 ">OUR STORY</h2>
                            <h3 className="text-4xl font-bold mb-4 font-recoleta">Who We Are</h3>
                            <p className="text-lg leading-relaxed mb-4 font-satoshi">
                                Founded in 2023, Identify Africa is a female-founded fintech company leveraging strategic partnerships to distribute our services and drive growth. We pride ourselves on streamlining access to African markets through unified, secure APIs, helping companies and developers connect to crucial services and datasets that fully identify and understand the region&apos;s people and assets.
                            </p>
                        </div>
                        <div className="mb-8 md:mb-0 flex-grow">
                            <h3 className="text-4xl font-bold mb-4 font-recoleta">Our Mission</h3>
                            <p className="text-lg leading-relaxed mb-4 font-satoshi">
                                At Identify Africa, we pride ourselves in streamlining access to Africa through unified secure APIs. We help companies and developers connect to services and datasets that are crucial to fully identify and understand the African markets, its people, and assets.
                            </p>
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-4xl font-bold mb-4 font-recoleta">Why Choose Us</h3>
                            <p className="text-lg leading-relaxed font-satoshi">
                                Identify Africa stands out for its unified secure API-based verification, validation, and authentication services, providing seamless access to crucial data points across Africa. Our dedicated support team is always available to assist with any challenges or questions you may have, ensuring you get the most out of our solutions.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-2 flex flex-col justify-between items-center space-y-4">
                        <div className="bg-[#B9561A] text-white p-4 rounded-lg shadow-md flex-grow w-full flex flex-col justify-center items-center text-center">
                            <h4 className="text-4xl font-bold mb-2 font-recoleta">95%</h4>
                            <p className='font-satoshi'>Compliance rate with international and local regulatory standards</p>
                        </div>
                        <div className="bg-[#B9561A] text-white p-4 rounded-lg shadow-md flex-grow w-full flex flex-col justify-center items-center text-center">
                            <h4 className="text-4xl font-bold mb-2 font-recoleta">80%</h4>
                            <p className='font-satoshi'>Reduction in onboarding time for clients using our APIs</p>
                        </div>
                        <div className="bg-[#B9561A] text-white p-4 rounded-lg shadow-md flex-grow w-full flex flex-col justify-center items-center text-center">
                            <h4 className="text-4xl font-bold mb-2 font-recoleta">99.9%</h4>
                            <p className='font-satoshi'>Accuracy in identity verification across over 20 government ID databases</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-12">
    <h2 className="text-md font-satoshi font-semibold text-black md:mb-4">OUR SPECIALTIES</h2>
    <h3 className="text-4xl font-bold mb-2 font-recoleta">What We Do</h3>
    <p className='font-satoshi mb-4'>We offer a comprehensive suite of verification solutions tailored to meet the unique needs of businesses and customers in the African fintech landscape. Our services include:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-satoshi">
        <div className="p-6 bg-white shadow rounded-lg flex flex-row items-start h-full">
            <div className="w-16 h-16 bg-[#FFFBF8] rounded-xl flex items-center justify-center mr-4 border border-[#E76C21] flex-shrink-0">
                <IoMdPerson   className="text-[#E76C21] text-2xl" />
            </div>
            <div className="flex-grow">
                <h4 className="text-xl font-semibold mb-2">Customer KYC Verification</h4>
                <p className="text-sm">Our KYC service satisfies KYC compliance requirements so that you can focus on securing other important areas of your business. Identify and verify customer IDs in seconds to improve the overall customer onboarding experience.</p>
            </div>
        </div>
        <div className="p-6 bg-white shadow rounded-lg flex flex-row items-start h-full">
            <div className="w-16 h-16 bg-[#FFFBF8] rounded-xl flex items-center justify-center mr-4 border border-[#E76C21] flex-shrink-0">
                <HiBuildingOffice2  className="text-[#E76C21] text-2xl" />
            </div>
            <div className="flex-grow">
                <h4 className="text-xl font-semibold mb-2">Business KYC Verification</h4>
                <p className="text-sm">Leverage our Know Your Business solution to uncover hidden threats to your business early in the relationship. Perform registry, customers, board and ultimate beneficial owners (UBOs) screening on our robust KYB solution.</p>
            </div>
        </div>
        <div className="p-6 bg-white shadow rounded-lg flex flex-row items-start h-full">
            <div className="w-16 h-16 bg-[#FFFBF8] rounded-xl flex items-center justify-center mr-4 border border-[#E76C21] flex-shrink-0">
                <IoIosWallet className="text-[#E76C21] text-2xl" />
            </div>
            <div className="flex-grow">
                <h4 className="text-xl font-semibold mb-2">Transactional Details Validation</h4>
                <p className="text-sm">Ensuring the accuracy and authenticity of transactional data.</p>
            </div>
        </div>
        <div className="p-6 bg-white shadow rounded-lg flex flex-row items-start h-full">
            <div className="w-16 h-16 bg-[#FFFBF8] rounded-xl flex items-center justify-center mr-4 border border-[#E76C21] flex-shrink-0">
                <IoMdDocument className="text-[#E76C21] text-2xl" />
            </div>
            <div className="flex-grow">
                <h4 className="text-xl font-semibold mb-2">Document Authentication</h4>
                <p className="text-sm">Validating various documents to ensure their authenticity and reliability.</p>
            </div>
        </div>
    </div>
</section>
            <section className="mb-12">
                <h2 className="text-md font-satoshi font-semibold text-black md:mb-4 ">OUR TEAM</h2>
                <h3 className="text-4xl font-bold mb-4 font-recoleta">Meet the dedicated team behind Identify Africa&apos;s success</h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 font-satoshi">
                    <div className="p-4 bg-white shadow rounded-lg text-center">
                        <img src="/winnie.png" alt="Winnie Chira" className="w-full h-72 mx-auto mb-2 rounded object-cover" />
                        <h4 className="text-xl font-bold mb-2">Winnie Chira</h4>
                        <p className="">Founder - CEO</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg text-center">
                        <img src="/gary.png" alt="Gary Schwartz" className="w-full h-72 mx-auto mb-2 rounded object-cover" />
                        <h4 className="text-xl font-semibold mb-2">Gary Schwartz</h4>
                        <p className="">Advisor</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg text-center">
                        <img src="/teresina.png" alt="Teresina Kamau" className="w-full h-72 mx-auto mb-2 rounded object-cover" />
                        <h4 className="text-xl font-semibold mb-2">Teresina Kamau</h4>
                        <p className="">Customer Success Lead</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg text-center">
                        <img src="/janice.png" alt="Janice Malu" className="w-full h-72 mx-auto mb-2 rounded object-cover" />
                        <h4 className="text-xl font-semibold mb-2">Janice Malu</h4>
                        <p className="">Head of Marketing</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg text-center">
                        <img src="/alex.png" alt="Alex Kariuki" className="w-full h-72 mx-auto mb-2 rounded object-cover" />
                        <h4 className="text-xl font-semibold mb-2">Alex Kariuki</h4>
                        <p className="">Technical Lead</p>
                    </div>
                </div>
            </section>




            <section className="mb-12">
                <h2 className="text-md font-satoshi font-semibold text-black md:mb-4 ">SUCCESS STORIES</h2>
                <h3 className="text-4xl font-bold mb-4 font-recoleta">How Identify Africa transforms the digital space</h3>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="p-10 bg-white shadow rounded-lg relative ">
                        <ImQuotesLeft className="absolute top-2 md:mb-4 left-2 text-[#FAE2D3] text-xl" />
                        <p className="mb-4 mt-4">&ldquo;With Identify Africa, we reduced our onboarding time by 60% and significantly enhanced our security measures. Their solutions have been integral to our growth.&ldquo;</p>
                        <p className="font-bold">– FinTech Innovator ABC</p>
                        <ImQuotesRight className="absolute bottom-2 right-2 text-[#FAE2D3] text-xl" />
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg relative">
                        <ImQuotesLeft className="absolute top-2 left-2 text-[#FAE2D3] text-xl" />
                        <p className="mb-4 mt-4">&ldquo;The comprehensive verification tools from Identify Africa have enabled us to stay compliant and secure while scaling our operations globally.&ldquo;</p>
                        <p className="font-bold">– Global FinTech Leader XYZ</p>
                        <ImQuotesRight className="absolute bottom-2 right-2 text-[#FAE2D3] text-xl" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
