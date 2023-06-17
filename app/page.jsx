import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@components/Hero'
import Button from '@components/Button'
import Reviews from '@components/Reviews'
import Analyst from '@components/Analyst'
import hero from '@public/assets/cream_hero.png'
import sun from '@public/assets/sun.png'
import moon from '@public/assets/moon.png'
import hand from '@public/assets/rx_formulas.png'
import waiting from '@public/assets/benefits.png'

const page = () => {
  return (
    <section className='h-full w-full'>

        <div className='flex xl:flex-row flex-col md:px-[130px] px-[60px] py-[120px] items-center justify-between gap-[50px] bg-pink'>
          <div> 
          <Hero 
            top_title='Bring' 
            middle_title='CUROLOGY' 
            bottom_title='in life' 
            text='Feeling yourself well is the key of success. Make the right choise. Choose curology'
            color_text='white'
          />
          <Link href='/products'>
            <Button text='SHOP NOW'/>
          </Link>
          </div>
          <Image 
            src={hero}
            alt='curology_cream'
            width={300}
            height={300}
          />
          <Analyst class='flex flex-col gap-4'/>
          

          
        </div>

        <div className='flex xl:flex-row flex-col md:px-[130px] px-[60px] py-[20px] items-center'>
          <div className='flex flex-col mr-auto'>
            <div className='flex md:flex-row flex-col w-full items-center text-center'>
              <h2 className='sm:text-xl text-md text-purple mr-4'>RX formulas</h2>
              <div className='flex flex-row'>
                <Image src={sun} alt='sun' width={60} height={60} className='sm:py-[30px] py-[20px]'/>
                <Image src={moon} alt='moon' width={60} height={60} className='sm:py-[30px] py-[20px]'/>
              </div>
            </div>
            <p className='sm:text-s text-xs font-regular text-purple mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
          </div>
          <Image 
            src={hand}
            alt='hand'
            width={600}
            height={400}  
          />
        </div>

        <div className='bg-pink flex xl:flex-row flex-col md:px-[130px] px-[60px] py-[120px] items-center justify-between'>
          <div>
            <div className='flex flex-col'>
              <div className='flex lg:flex-row flex-col items-center text-center'>
                <div className='border-[5px] border-purple px-4 rotate-[-5deg] text-center'> <h2 className='md:text-xl text-md font-bold text-purple'>WHY</h2> </div>
                <h2 className='md:text-xl text-md font-semibold text-purple'>are you waiting?</h2>
              </div>
              <p className='md:text-s text-xs text-white font-regular mt-8'>Start now your teraphy and post the result in our site!</p>
            </div>
            <Link href='/products'>
              <Button text='SHOP NOW'/>
            </Link>
          </div>
          
          <Image
              src={waiting}
              alt='call_to_action'
              width={400}
              height={400}
          />
          
        </div>

        <Reviews />
        
    </section>

  )
}

export default page