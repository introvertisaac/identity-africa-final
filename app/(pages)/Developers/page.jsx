import Footer from '@/app/components/Footer/Footer'
import Navbar from '@/app/components/Navbar/Navbar'
import DevelopersForm from '@/app/Forms/Developers/DevelopersForm'
import React from 'react'

const page = () => {
    return (
        <div className='pt-36 w-full flex flex-col items-center bg-[#FFFBF8]'>
    <div className='text-center max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mb-8 '>
        <h2 className="text-4xl font-bold">
            We empower you with <span className="text-[#E76C21]">seamless API Integrations</span> <br/>for optimal efficiency
        </h2>
    </div>

    <DevelopersForm />
</div>
    )
}

export default page