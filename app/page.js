import RightHero from './components/righthero'
import LeftHero from './components/lefthero'
import HorizPartners from './components/horizpartners'
import Clients from './components/clients'
import BlogHome from './components/bloghome'
import Foot from './components/foot'
import Form from './components/form'
import Hero from './components/hero'
import Homeheroleft from './components/homeheroleft'
import { homeContent } from './utils/contents'


export default function Home() {

  return (
    // Banner
    <main className='flex-col'>
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  Get started
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                  Learn more
              </a>  
          </div>
        </div>
      </section>
      <div className='flex flex-col items-center gap-3 justify-center h-32 w-full py-8'>
        <p className='font-light text-gray-400 text-xl'>AUSAMERICAN PARTNERS</p>
        <h1 className='font-bold text-5xl'>"Seek, Transform and Thrive"</h1>
      </div>
      <Hero></Hero>
      {/* <RightHero content={homeContent.rightImgHero}/> */}
      <Homeheroleft></Homeheroleft>
      <div className='flex flex-col items-center justify-center h-20 w-full  bg-blue-800'>
        <h1 className='font-bold text-4xl text-white'>Some of Our Clients</h1>
      </div>
     <Clients></Clients>
      <div className='flex flex-col items-center justify-center h-20 w-full  bg-blue-800'>
        <h1 className='font-bold text-4xl text-white'>Directors & Partners</h1>
      </div>
      <HorizPartners></HorizPartners>
      <div className='flex flex-col items-center justify-center h-20 w-full mb-3  bg-blue-800'>
        <h1 className='font-bold text-4xl text-white'>Latest Articles</h1>
      </div>

      <BlogHome></BlogHome>
      <Form></Form>
    </main>
  )
}
