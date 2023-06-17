import React from 'react'
import Image from 'next/image'
import Hero from '@components/Hero'
import Button from '@components/Button'
import Products from '@components/Products'
import bundle from '@public/assets/bundle.png'

const products = () => {

  

  return (
    <section className='h-full w-full'>
      <div className='flex xl:flex-row flex-col items-center justify-between'>
        <div className='md:px-[130px] px-[60px] md:py-[120px] py-[180px]'>
          <Hero 
            top_title='Try our'
            middle_title='BUNDLE'
            bottom_title='made for u!'
            text='3 creams, 50% discount'
            color_text='purple'
          />
          <Button text='BUY NOW'/>
        </div>
        <Image 
          src={bundle}
          alt='bundle_img'
          width={700}
          height={700}
        />
      </div>

      <Products/>
    </section>
  )
}

export default products