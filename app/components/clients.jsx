import React from 'react'
import Image from 'next/image'


const clients = () => {
  return (
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-20 md:grid-cols-3 lg:grid-cols-6">
      <Image
        src='/assets/images/logo.png'
        alt='logo'
        width={150}
        height={150}
        className='object-contain'
      />
      <Image
        src='/assets/images/logo.png'
        alt='logo'
        width={150}
        height={150}
        className='object-contain'
      />
      <Image
        src='/assets/images/logo.png'
        alt='logo'
        width={150}
        height={150}
        className='object-contain'
      />
      <Image
        src='/assets/images/logo.png'
        alt='logo'
        width={150}
        height={150}
        className='object-contain'
      />
      <Image
        src='/assets/images/logo.png'
        alt='logo'
        width={150}
        height={150}
        className='object-contain'
      />
      <Image
        src='/assets/images/logo.png'
        alt='logo'
        width={150}
        height={150}
        className='object-contain'
      />
    </div>
  </div>
  )
}

export default clients