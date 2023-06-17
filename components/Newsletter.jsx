import React from 'react'

const Newsletter = () => {
  return (
    <section className='flex flex-col items-center text-center w-[100%] mt-6'>
        <h2 className='md:text-xl text-sm text-purple font-semibold'>Subscribe to our newsletter</h2>
        <p className='md:text-sm text-xs'>To recive all the news about our releases</p>
        <div className='flex flex-row mt-6 mb-6'>
            <input type='text' placeholder='Enter your email addres' className='p-4 rounded-l-[10px] max-w-[100px] sm:max-w-[200px]'/>
            <button className='p-4 text-white bg-purple rounded-r-[10px]'>JOIN</button>
        </div>
    </section>
  )
}

export default Newsletter