import React from 'react'

const righthero = ({content}) => {
  return (
    <div><div className='w-full flex sm:h-60 md:h-96 lg:h-96'>
    <div className='flex flex-col w-1/2 justify-center items-center bg-blue-800 text-white gap-4 p-3'>
      <h1 className='font-bold text-5xl'>{content.title}</h1>
      <p className='text-xl text-justify sm:max-w-xs md:max-w-xs lg:max-w-xl'>{content.description}</p>
    </div>
    <div className='w-1/2 bg-cover bg-center shadow-sm' style={{backgroundImage: `url("${content.urlImg}")`}}></div>
  </div></div>
  )
}

export default righthero