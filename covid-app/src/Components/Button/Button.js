import React from 'react'

const Button = (props) => {

  return (
    <button 
    type={props.type}
    onClick={props.onClick}
     className='active:scale-[.98] active:duration-75 p-4 opacity-90 hover:opacity-100    transform py-2 bg-blue-500 rounded-xl text-white font-bold text-lg'>
        {props.value}
        </button>
  )
}

export default Button