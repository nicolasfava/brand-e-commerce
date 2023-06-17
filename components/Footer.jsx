'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Newsletter from './Newsletter'
import logo from '@public/assets/logo.png'

const Footer = () => {

  const [active, setActive] = React.useState('Home')

  return (
    <section className='w-full bg-blue md:px-[130px] px-[60px] py-[120px]'>
         <div className='flex xl:flex-row flex-col gap-4 xl:gap-0 items-center justify-between'>
            <div className='flex flex-row items-center'>
                <Image 
                    src={logo}
                    alt='logo'
                    width={60}
                    height={60}
                    className=''
                />
                <h3 className='mr-auto text-s font-semibold text-purple'>Curology</h3>
            </div>
            <Newsletter />
            <div className='flex flex-col text-center xl:text-left'>
                <Link href='/' className='sm:mr-4 mb-4 sm:mb-0'>
                    <p className={`text-dimPurple text-xs font-medium`}>Home</p>
                </Link>
                <Link href='/products' className='sm:mr-4 mb-4 sm:mb-0' onClick={() => setActive('Products')}>
                    <p className={`text-dimPurple text-xs font-medium`}>Products</p>
                </Link>
                <Link href='/why-curology' className='sm:mr-4 mb-4 sm:mb-0' onClick={() => setActive('WhyCurology')}>
                    <p className={`text-dimPurple text-xs font-medium`}>Why Curology</p>
                </Link>
            </div>
         </div>
    </section>
  )
}

export default Footer