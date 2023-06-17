import React from 'react'
import Hero from '@components/Hero'
import Analyst from '@components/Analyst'
import Reviews from '@components/Reviews'
import Image from 'next/image'
import doctor from '@public/assets/doctor.png'
import ragazzo from '@public/assets/ragazzo.png'
import ragazza from '@public/assets/ragazza.png'
import signora from '@public/assets/signora.png'


const page = () => {
  return (
    <section className='h-full w-full'>
      <div className='bg-pink flex lg:flex-row flex-col items-center justify-between md:px-[130px] px-[60px] pt-[240px] relative'>
        <Hero 
          middle_title='WHY'
          bottom_title='choose us?'
          color_text='purple'
        />
        
        <Image 
          src={doctor}
          alt='doctor_img'
          width={400}
        />

      <div className="absolute z-[0] w-[50%] h-[50%] bottom-0 right-0 rounded-full pink__gradient"/>   

      </div>

      <div className='md:px-[130px] px-[60px] py-[240px]'>
        <Analyst class='flex xl:flex-row flex-col gap-6 xl:gap-0 items-center justify-between'/>
      </div>

      <div className='flex md:flex-row flex-col flex-wrap w-full min-h-[100vh]'>
        <div className='flex-1 overflow-hidden relative overlay'> 
          <Image 
            src={signora}
            alt='signora_img'
            height={800}
            className='object-cover w-[100%] h-[100%] hover:scale-125 transition ease-in-out delay-150 image'
          />
          <h4 className='overlayText transition ease-in-out delay-150'>FOR OLDER</h4>         
        </div>
       
       <div className='flex-1 overflow-hidden relative overlay'>
        <Image 
          src={ragazzo}
          alt='ragazzo_img'
          height={800}
          className='object-cover w-[100%] h-[100%] hover:scale-125 transition ease-in-out delay-150'
        />
        <h4 className='overlayText transition ease-in-out delay-150'>FOR YOUNGER</h4>
       </div>

        <div className='flex-1 overflow-hidden relative overlay'>
          <Image 
          src={ragazza}
          alt='ragazza_img'
          height={800}
          className='object-cover w-[100%] h-[100%] hover:scale-125 transition ease-in-out delay-150'
          />
          <h4 className='overlayText transition ease-in-out delay-150'>FOR EVERYONE</h4>
        </div>

      </div>

      <Reviews />
    
    </section>
  )
}

export default page