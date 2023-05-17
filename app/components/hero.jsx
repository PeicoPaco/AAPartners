import React from 'react'

const hero = () => {
  return (
  <section class="text-white body-font bg-blue-800">
    <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">Our Vision, Our Dream
        </h1>
        <p class="mb-8 leading-relaxed text-justify max-w-3xl">Support our clients in achieving their goals by providing expert advice and practical,
        quickly implementable solutions, which begin with an analysis and diagnosis of the current situation, the development of tactics and actions,
        and the provision of guidance and support throughout the execution process</p>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="./assets/images/Speech.jpg"/>
      </div>
    </div>
  </section>
  )
}

export default hero