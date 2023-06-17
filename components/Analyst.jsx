import React from 'react'

const Analyst = (props) => {
  return (
    <div className={`${props.class}`}>
        <div className='border-l-4 border-purple px-2 text-purple hover:text-white hover:bg-purple'> <p className='md:text-md text-sm font-medium'>93% report effective</p> </div>
        <div className='border-l-4 border-purple px-2 text-purple hover:text-white hover:bg-purple'> <p className='md:text-md text-sm font-medium'>4M+ treated</p> </div>
        <div className='border-l-4 border-purple px-2 text-purple hover:text-white hover:bg-purple'> <p className='md:text-md text-sm font-medium'>9K+ 5-star review</p> </div>
     </div>
  )
}

export default Analyst