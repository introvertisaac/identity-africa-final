"use client";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import Framer Motion components
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function PrivacyPolicy() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const MotionWrapper = ({ children, ...props }) => {
    if (isMounted) {
      return <MotionDiv {...props}>{children}</MotionDiv>;
    }
    return <div>{children}</div>;
  };

  return (
    <div className="min-h-screen md:mt-32">
      <Head>
        <title>Privacy Policy - Identity Africa</title>
        <meta name="description" content="Identity Africa Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 sm:px-6 py-8">
        {/* <Link href="/" className="text-blue-600 mb-4 inline-block">← Back</Link> */}

        <MotionWrapper
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-2"
        >
          <h1>Privacy Policy</h1>
        </MotionWrapper>

        <p className="text-gray-600 mb-8">Last Updated: July 2024</p>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-full md:pr-8">
              <p className="mb-6">
                Your privacy is important to us. It is identityafrica&apos;s policy to respect your privacy regarding
                any information we may collect from you across our website, 
                <a href="" className="text-blue-600">https://identityafrica.io</a>, and
                other sites we own and operate.
              </p>

              <MotionWrapper 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
                <p className="mb-4">
                  This procedure is intended to be used when a business process is put in place which requires the
                  collection of personal data from data subjects who fall within the scope of the Data Protection
                  Regulation (GDPR). The GDPR/ODPC requires that specific information is provided at the point of data
                  collection or receipt which informs the data subject about the use that the data will be put to, and
                  their rights over that data. This information will vary according to the specific circumstances and
                  this procedure should be used to ensure that the correct information is given in the correct format so
                  that IdentityAfrica remains compliant with the ODPC/GDPR at all times.
                </p>
                <p className="mb-4">
                  Whereas in the past, information regarding privacy has tended to be provided in a single document
                  (often called a “Privacy Policy”), the GDPR/ODPC lends itself more to an approach where individual
                  privacy notices are used according to the transaction involved. This allows the privacy information
                  provided to be more transparent and less confusing for the data subject. Such privacy policies may be
                  used in conjunction with a more traditional privacy policy if desired.
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Privacy Policy Procedure</h2>
                <p className="mb-4">
                  The purpose of this procedure is to create an appropriate privacy notice which provides the data
                  subject with the information they are required to receive, in as fair and transparent a way as
                  possible. There are two main ways of obtaining personal data which are covered by the ODPC/GDPR. These
                  are:
                </p>
                <ul className="list-disc pl-5 mb-6">
                  <li className="mb-2">Where personal data are collected from the data subject</li>
                  <li className="mb-2">Where personal data have not been obtained from the data subject</li>
                </ul>
                <p className="mb-4">
                  In both cases, the ODPC/GDPR specifies the information that must be provided to the data subject. This
                  procedure describes that information and explains how to create a privacy notice that meets the
                  requirements.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold mb-4">Does the data subject already have the information?</h3>
                <p className="mb-4">
                  The ODPC/GDPR requires the data subject to be provided with the listed information unless the data
                  subject already has the information. It is therefore important to determine whether it is reasonable
                  to believe that the data subject is already aware of all the information that would otherwise be
                  required to be provided. Where this is the case, the rationale for this belief must be documented and
                  retained as evidence of ODPC/GDPR compliance. Care should be taken to ensure that this applies to all
                  the information required and all the data subjects affected, otherwise steps should be taken to
                  address any gaps.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold mb-4">Where personal data is collected from the data subject</h3>
                <p className="mb-4">
                  If the data subject does not have the information required, the following must be provided at the time
                  when personal data are obtained:
                </p>
                <ol className="list-decimal pl-5 mb-6">
                  <li className="mb-2">Identity and contact details of the controller and, where applicable, of the controller’s representative</li>
                  <li className="mb-2">Contact details of the data protection officer, where applicable</li>
                  <li className="mb-2">The purposes and legal basis of the processing (e.g. consent, legal obligation, legitimate interest)</li>
                  <li className="mb-2">The legitimate interests pursued by the controller, or by a third party (if legitimate interest is defined as the lawful basis of the processing)</li>
                  <li className="mb-2">The recipients, or categories of recipients, of the data, if any</li>
                  <li className="mb-2">Details of any planned transfers of personal data to a third country or international organisation</li>
                  <li className="mb-2">The length of time that the personal data will be stored for (or the criteria used to determine that period)</li>
                  <li className="mb-2">The data subject’s rights to access, rectification, erasure and portability of the personal data (depending on the lawful basis used, see below)</li>
                  <li className="mb-2">The data subject’s rights to restriction of, or objection to, processing of their personal data</li>
                  <li className="mb-2">The data subject’s rights to withdraw consent at any time (if consent is used as the lawful basis of the processing)</li>
                  <li className="mb-2">The data subject’s right to lodge a complaint with a supervisory authority</li>
                  <li className="mb-2">Whether the collection of the personal data is a statutory or contractual requirement and whether they are obliged to provide it</li>
                  <li className="mb-2">Whether the personal data will be subject to automated processing, including profiling and, if so, the logic and potential consequences involved</li>
                </ol>
                <p className="mb-4">
                  Care must be taken to explain the data subject’s rights in the context of the lawful basis of the
                  processing. For example, if the lawful basis is contractual then the right to withdraw consent does
                  not apply (see the Data Subject Request Procedure for more information).
                </p>

                <h3 className="text-lg sm:text-xl font-semibold mb-4">Where personal data has not been obtained from data subject</h3>
                <p className="mb-4">
                  If the personal data are not obtained directly from the data subject, there are a number of additional
                  circumstances (i.e. in addition to the case where the data subject already has the information)
                  allowable by the ODPC/GDPR that mean that the information does not have to be provided. These are:
                </p>
                <ul className="list-disc pl-5 mb-6">
                  <li className="mb-2">If the provision of the information proves impossible or would involve a disproportionate effort</li>
                  <li className="mb-2">Where it is covered by other applicable law(s) which provide appropriate measures to protect the data subject’s legitimate interests</li>
                  <li className="mb-2">Where the data is confidential under law</li>
                </ul>
                <p className="mb-4">
                  Where any of the conditions apply, the rationale for this belief must be documented and retained as
                  evidence of ODPC/GDPR compliance. Care should be taken to ensure that this applies to all the
                  information required and all the data subjects affected, otherwise steps should be taken to address
                  any gaps. If none of these conditions apply, the information must be provided to the data subject:
                </p>
                <ul className="list-disc pl-5 mb-6">
                  <li className="mb-2">Within a reasonable time, at the latest one month after obtaining it</li>
                  <li className="mb-2">If used for communication (e.g. email addresses), at the latest when the first communication takes place</li>
                  <li className="mb-2">At the point where the data are disclosed to another recipient (if applicable)</li>
                </ul>
                <p className="mb-4">The information to be provided is as follows:</p>
                <ol className="list-decimal pl-5 mb-6">
                  <li className="mb-2">Identity and contact details of the controller and, where applicable, of the controller’s representative</li>
                  <li className="mb-2">Contact details of the data protection officer, where applicable</li>
                  <li className="mb-2">The purposes and legal basis of the processing (e.g. consent, legal obligation, legitimate interest)</li>
                  <li className="mb-2">The categories of personal data concerned</li>
                  <li className="mb-2">The recipients, or categories of recipients, of the data, if any</li>
                  <li className="mb-2">Details of any planned transfers of personal data to a third country or international organization</li>
                  <li className="mb-2">The length of time that the personal data will be stored for (or the criteria used to determine that period)</li>
                  <li className="mb-2">The data subject’s rights to access, rectification, erasure and portability of the personal data (depending on the lawful basis used, see below)</li>
                  <li className="mb-2">The data subject’s rights to restriction of, or objection to, processing of their personal data</li>
                  <li className="mb-2">The data subject’s rights to withdraw consent at any time (if consent is used as the lawful basis of the processing)</li>
                  <li className="mb-2">The data subject’s right to lodge a complaint with a supervisory authority</li>
                  <li className="mb-2">The origin of the personal data</li>
                  <li className="mb-2">Whether the personal data will be subject to automated processing, including profiling and, if so, the logic and potential consequences involved</li>
                </ol>
                <p className="mb-4">
                  As for when the personal data is obtained directly from the data subject, the data subject’s rights
                  will depend on the lawful basis of the processing.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold mb-4">Informing the data subject</h3>
                <p className="mb-4">
                  There are two Privacy Notice Planning Forms available; one to be used where the personal data are
                  collected directly from the data subject, and the other where the personal data are obtained from
                  another source. Use the relevant form to ensure that all the required information has been captured
                  before it is put into the appropriate format for communication to the data subject. As with all
                  information provided to data subjects in accordance with the ODPC/GDPR, the information must be in an
                  intelligible and easily accessible form, using clear and plain language. The best method of providing
                  the information to the data subject will depend upon the specifics of the business process and may
                  include one or more of:
                </p>
                <ul className="list-disc pl-5 mb-6">
                  <li className="mb-2">As a notice on a website/platform</li>
                  <li className="mb-2">Via email</li>
                  <li className="mb-2">Via physical post</li>
                  <li className="mb-2">Via virtual meeting/call</li>
                  <li className="mb-2">By telephone</li>
                  <li className="mb-2">Face to face</li>
                </ul>
                <p className="mb-4">
                  The approach to privacy notices needs to be carefully planned so that the relevant information is
                  presented to the data subject at the appropriate time. This will tend to mean that a coherent set of
                  privacy notices is required, rather than a single document that covers all processing. Each privacy
                  notice should be designed to be displayed at the appropriate point in the business process and be
                  specific to the information being collected, the purpose for which it will be put, and the lawful
                  basis of the processing involved. This is often referred to as a “just in time approach” to privacy
                  notices. Equally, the best way to present the information should be carefully considered. Presenting a
                  link to the relevant privacy notice document may meet the requirements of GDPR on a website, but
                  alternative methods of screen design may allow a smoother user experience.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold mb-4">Further Processing</h3>
                <p className="mb-4">
                  However, if it is decided to use the personal data for a purpose other than that for which the data
                  were obtained or collected, further information about that purpose, and the basis on which it is
                  deemed lawful, must be provided to the data subject before the processing happens.
                </p>
              </MotionWrapper>
            </div>

            {/* <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <Image 
                src="/privacy.jpg" 
                alt="Privacy Illustration" 
                width={400} 
                height={400} 
                layout="responsive"
                className="object-contain"
              />
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
