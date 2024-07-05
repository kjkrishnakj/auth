import React from 'react'
import logo from "../public/logo.png"
import Image from 'next/image';
const about = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="relative mx-auto text-xl h-24 w-22 bg-white rounded-full flex items-center justify-center">
            <Image className="mx-auto text-xl" src={logo} alt="" style={{ width: '13rem' }} />

          </div>
          {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl  my-4 font-medium text-gray-900">About Us</h1>
            <p class="mb-8 leading-relaxed">At Bharat Intern, we are passionate about empowering innovations that shape a better future for businesses and individuals alike.

Connects students with internships: Bharat Intern connects students with internships in a variety of fields. This gives students the opportunity to gain experience, skills, and a network.

Gives students experience, skills, and a network: Internships can give students valuable experience in their field. They can also help students develop new skills and build a network of contacts.

Is a great way to start your career: Internships can be a great way to start your career. They can help you gain experience, skills, and a network that can help you land your first job.</p>
            
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default about
