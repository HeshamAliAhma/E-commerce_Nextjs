"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Links = [
  {path:'/', title:'Home'},
  {path:'/Explore', title:'Explore'},
  {path:'/Projects', title:'Projects'},
  {path:'/About_Us', title:'About Us'},
  {path:'/Contact_Us', title:'Contact Us'},
]





function Header() {
  const path = usePathname()
  return (
<header className="bg-white shadow-md">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
<Image src={'/logo.svg'} alt='logo' width={50} height={50} />

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          {Links.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className={`text-gray-500 transition hover:text-primaryHover ${path === link.path ? 'text-primary' : ''}`}>{link.title}</Link>
            </li>
          ))}



        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <Link
            className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primaryHover"
            href={'/Login'}
          >
            Login
          </Link>

          <Link
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primaryHover sm:block"
            href={'/Register'}
          >
            Register
          </Link>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-primary transition hover:primaryHover md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
