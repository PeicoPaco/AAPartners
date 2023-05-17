import React from 'react'

const lefthero = ({content}) => {
  return (
    <div className='w-full flex flex-row-reverse sm:h-60 md:h-96 lg:h-96'>
      <div className='flex flex-col w-1/2 justify-center items-center text-blue-800 gap-4 p-3'>
        <h1 className='font-bold lg:text-5xl md:text-3xl'>{content.title}</h1>
        <p className='text-justify text-xl sm:max-w-xs md:max-w-xs lg:max-w-xl'>{content.description}</p>
      </div>
      <div className='w-1/2 bg-cover bg-center shadow-sm' style={{backgroundImage: `url("${content.urlImg}")`}}></div>
    </div>
  )
}

export default lefthero