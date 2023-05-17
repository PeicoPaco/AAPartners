import React from 'react'
import Form from '../components/form'
import Allpartners from '../components/allpartners'

const AboutUs = () => {
  return (
    <main className='flex-col'>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="./assets/images/ProfessionalImg.jpg"/>
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">About Us</h2>
              <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.
              Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="./assets/images/ProfessionalImg.jpg"/>
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Our Values</h2>
              <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.
              Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
            </div>
          </div>
        </div>
      </section>
      <div className='flex flex-col items-center justify-center h-20 w-full  bg-blue-800'>
        <h1 className='font-bold text-4xl text-white'>Our Professionals</h1>
      </div>
      <Allpartners></Allpartners>
      <Form></Form>
    </main>
  )
}

export default AboutUs