'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false })

export default function PrivacyContent() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const MotionWrapper = ({ children, ...props }) => {
    if (isMounted) {
      return <MotionDiv {...props}>{children}</MotionDiv>
    }
    return <div>{children}</div>
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-full md:pr-8 font-satoshi">
          <p className="mb-6">
            Your privacy is important to us. It is identityafrica&apos;s policy to respect your privacy regarding
            any information we may collect from you across our website, 
            <a href="https://identityafrica.io" className="text-blue-600">https://identityafrica.io</a>, and
            other sites we own and operate.
          </p>

          <MotionWrapper 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Include the rest of your privacy policy content here */}
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 font-recoleta">Introduction</h2>
            <p className="mb-4">
              This procedure is intended to be used when a business process is put in place which requires the
              collection of personal data from data subjects who fall within the scope of the Data Protection
              Regulation (GDPR). The GDPR/ODPC requires that specific information is provided at the point of data
              collection or receipt which informs the data subject about the use that the data will be put to, and
              their rights over that data.
            </p>
            {/* ... (rest of your privacy policy content) ... */}
          </MotionWrapper>
        </div>
      </div>
    </div>
  )
}