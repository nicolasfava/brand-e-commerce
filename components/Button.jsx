import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-blue text-white px-6 py-4 rounded-[10px] object-contain mt-8'>{props.text}</button>
  )
}

export default Button