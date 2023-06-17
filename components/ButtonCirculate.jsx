import React from 'react'

const ButtonCirculate = (props) => {
  return (
    <div className='w-[160px] h-[160px] rounded-[50%] bg-blue py-4 px-8 text-center flex flex-col justify-center'>
        <p className='text-white font-medium'>{props.text}</p>
    </div>
  )
}

export default ButtonCirculate