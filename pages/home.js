import React from 'react'

import logo from "../public/logo.png"
import Image from 'next/image';

const home = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="relative mx-auto text-xl h-24 w-22 bg-white rounded-full flex items-center justify-center">
            <Image className="mx-auto text-xl" src={logo} alt="" style={{ width: '13rem' }} />

          </div>
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl  my-4 font-medium text-gray-900">Unlock Your Potential With Bharat Intern</h1>
            <p class="mb-8 leading-relaxed">Our goal is to empower the next generation of tech leaders. Our internship program offers hands-on experience in different fields.</p>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default home