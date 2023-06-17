import React from 'react'
import Image from 'next/image';
import { reviews } from '@costants/index';
import virgolette from '@public/assets/virgolette.png'

const Reviews = () => {
  return (
    <section className='flex xl:flex-row flex-col items-center py-[120px]'>
        {reviews.map(data => {
            return (
                <div key={data.id} className='flex flex-col p-8 mx-[100px] border-[1px] rounded-[10px] shadow-lg mb-[50px] xl:mb-0'>
                    <Image 
                        src={virgolette}
                        alt='virgolette'
                        width={40}
                        height={40}
                    />
                    <p className='md:text-s text-xs text-black font-regular mt-20'>{data.review}</p>
                    <div className='flex md:flex-row flex-col mt-16'>
                        <Image 
                            src={data.img}
                            alt='profile_img'
                            width={80}
                            height={100}
                            className='mr-10 mb-4 md:mb-0'
                        />
                        <div className='flex flex-col'>
                            <p className='md:text-s text-xs text-black font-regular'>{data.name}</p>
                            <p className='text-xs text-black font-regular'>{data.job}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </section>
  )
}

export default Reviews