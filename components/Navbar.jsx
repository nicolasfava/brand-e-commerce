'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@public/assets/logo.png'
import cart from '@public/assets/cart.png'
import menu from '@public/assets/menu.png'
import close from '@public/assets/close.png'

const Navbar = () => {

  const [active, setActive] = React.useState('Home')

  const [toggleDropdown, settoggleDropdown] = React.useState(false)

  return (
    <nav className='md:px-[130px] xs:px-[60px] px-[40px] py-[45px] w-full absolute z-[5] flex flex-row items-center justify-between'>
            <Image 
                src={logo}
                alt='logo'
                width={60}
                height={60}
                className=''
            />
            <h3 className='mr-auto text-s font-semibold text-purple'>Curology</h3>
            <div className='lg:flex hidden flex-row items-center gap-4'>
            <Link href='/' className='mr-4' onClick={() => setActive('Home')}>
                <p className={`${active === 'Home' ? 'text-purple' : 'text-dimPurple'} text-xs font-medium`}>Home</p>
            </Link>
            <Link href='/products' className='mr-4' onClick={() => setActive('Products')}>
                <p className={`text-xs font-medium ${active === 'Products' ? 'text-purple' : 'text-dimPurple'}`}>Products</p>
            </Link>
            <Link href='/why-curology' className='mr-4' onClick={() => setActive('WhyCurology')}>
                <p className={`${active === 'WhyCurology' ? 'text-purple' : 'text-dimPurple'} text-xs font-medium`}>Why Curology</p>
            </Link>
            
            </div>

        {/*Mobile Navigation */}

        <div className='lg:hidden flex flex-col justify-end'>
            <Image 
                src={toggleDropdown ? close : menu}
                alt='menu'
                width={30}
                height={30}
                onClick={() => settoggleDropdown((prev) => !prev)}
            />
            <div className={`${!toggleDropdown ? 'hidden' : 'flex'} flex-col absolute z-[5] xs:right-[60px] right-[40px] top-[100px] bg-purple justify- items-end rounded-xl p-6`}>
            <Link href='/' className='sm:mr-4 mb-4 sm:mb-0' onClick={() => setActive('Home')}>
                <p className={`${active === 'Home' ? 'text-white' : 'text-dimWhite'} text-xs font-medium`}>Home</p>
            </Link>
            <Link href='/products' className='sm:mr-4 mb-4 sm:mb-0' onClick={() => setActive('Products')}>
                <p className={`${active === 'Products' ? 'text-white' : 'text-dimWhite'} text-xs font-medium`}>Products</p>
            </Link>
            <Link href='/why-curology' className='sm:mr-4 mb-4 sm:mb-0' onClick={() => setActive('WhyCurology')}>
                <p className={`${active === 'WhyCurology' ? 'text-white' : 'text-dimWhite'} text-xs sm:text-purple text-white opacity-50 font-medium`}>Why Curology</p>
            </Link>
            
            </div>
        </div>
    </nav>
  )
}

export default Navbar