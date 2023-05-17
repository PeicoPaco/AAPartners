import React from 'react'

const homeheroleft = () => {
  return (
    <section class="text-blue-800 body-font">
    <div class="container mx-auto flex px-5 py-12 md:flex-row-reverse flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold">Our Mission, Our Promise
        </h1>
        <p class="mb-8 leading-relaxed text-justify max-w-3xl">Become a leading, reliable, and strategic partner of American and Australian companies
         and institutions, adapting to specific needs, prioritizing the development of a culture of innovation and continuous learning, 
        and contributing to society and the environment in a positive way.</p>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="./assets/images/Speech.jpg"/>
      </div>
    </div>
  </section>
  )
}

export default homeheroleft