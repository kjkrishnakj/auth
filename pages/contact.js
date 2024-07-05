import React from 'react';

import logo from "../public/logo.png"
import Image from 'next/image';

const contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <section className="text-gray-600 body-font">
        <div className="relative mx-auto text-xl h-24 w-22 bg-white rounded-full flex items-center justify-center">
          <Image className="mx-auto text-xl" src={logo} alt="" style={{ width: '13rem' }} />

        </div>
        <div class=" flex justify-center mt-5 items-center">
          <h1 class="title-font sm:text-4xl text-3xl  font-medium  text-gray-900 text-center">Contact Us</h1>
        </div>

        <div className="container px-5 py-20 mx-auto flex flex-col items-center">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z" />

                    <path d="M22 6L12 13 2 6" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Mail</h2>
                  <p className="leading-relaxed text-base">Business Inquiries: bharatintern.info@gmail.com</p>
                  <br />
                  <p>Student Support: contact.bharatintern@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </div>

                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Visit Here</h2>
                  <p className="leading-relaxed text-base">Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
