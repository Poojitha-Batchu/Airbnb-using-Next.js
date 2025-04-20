'use client'

import React, { useState } from 'react'
import { GlobeAltIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
// import NavbarSearch from './NavbarSearch'
import UserMenu from './UserMenu'
import logo from '../public/images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white z-50">
      <div >
        <div className="py-4" >
          <div className="max-w-[2520px] mx-auto px-20">
            <div className="flex items-center justify-between">
              {/* Left - Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="Airbnb Logo"
                  width={100}
                  height={35}
                  className="object-contain"
                />
              </Link>

              {/* Middle - Navigation Links */}
              <div className="flex items-center space-x-8">
                <Link href="/homes" className="text-[16px] font-medium">
                  Homes
                </Link>
                <Link href="/experiences" className="text-[16px] text-gray-500">
                  Experiences
                </Link>
              </div>

              {/* Right */}
              <div className="flex items-center space-x-6">
                <button className="text-[14px] font-medium hover:bg-gray-100 rounded-full px-4 py-3 transition">
                  Airbnb your home
                </button>
                <button className="hover:bg-gray-100 rounded-full p-3 transition">
                  <GlobeAltIcon className="h-[18px] w-[18px]" />
                </button>
                <div 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center border border-gray-300 rounded-full p-1.5 hover:shadow-md transition cursor-pointer gap-3"
                >
                  <Bars3Icon className="h-[18px] w-[18px] ml-1" />
                  <UserCircleIcon className="h-[30px] w-[30px] text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <NavbarSearch /> */}
      </div>
      <UserMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}

export default Header 