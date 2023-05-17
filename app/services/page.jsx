import React from 'react'
import { homeContent } from '../utils/contents'
import Lefthero from '../components/lefthero'
import Righthero from '../components/righthero'
import Form from '../components/form'

const Services = () => {


  return (
    <main className='flex-col'>
      <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
      </section>
    <Lefthero content={homeContent.leftImgHero}></Lefthero>
    <Righthero content={homeContent.rightImgHero}></Righthero>
    <Lefthero content={homeContent.leftImgHero}></Lefthero>
    <Righthero content={homeContent.rightImgHero}></Righthero>
    <Lefthero content={homeContent.leftImgHero}></Lefthero>
    <Righthero content={homeContent.rightImgHero}></Righthero>
    <Form></Form>
    </main>
  )
}

export default Services