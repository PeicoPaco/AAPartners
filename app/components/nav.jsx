import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className='flex place-content-between text-xl w-full mb-0 p-3 pr-9 text-white bg-blue-800 bg-opacity-50 z-10 fixed'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.png'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className=''>AUSAMERICAN PARTNERS</p>
      </Link>
      <div className='sm:flex hidden pl-4'>
        <div className='flex gap-3 md:gap-8'>
          <Link href="/">
            Home
          </Link>
          <Link href="/aboutus">
            About Us
          </Link>
          <Link href="/services">
            Services
          </Link>
          <Link href="/blogs">
            Blog
          </Link>
        </div>
        
      </div>
    </nav>
  )
}

export default Nav