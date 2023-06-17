import React from 'react'

const Hero = (props) => {
  return (
    <div className='flex flex-col max-w-[381px]'>
        <h2 className={`sm:text-xl text-md text-${props.color_text} font-semibold`}>{props.top_title}</h2>
        <div className='border-[5px] border-purple px-4 rotate-[-5deg] text-center'> <h2 className='sm:text-xl text-md font-bold text-purple'>{props.middle_title}</h2> </div>
        <h2 className={`sm:text-xl text-md text-${props.color_text} font-semibold ml-auto`}>{props.bottom_title}</h2>
        <p className={`md:text-s font-xs text-${props.color_text} font-regular mt-4`}>{props.text}</p>
    </div>
  )
}

export default Hero