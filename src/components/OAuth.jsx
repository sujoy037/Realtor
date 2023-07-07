import React from 'react'
import {FcGoogle} from 'react-icons/fc'

const OAuth = () => {
  return (
    <button className='flex items-center
    justify-center w-full  bg-red-700  text-white
    px-7 py-3
    text-sm uppercase font-medium rounded shadow-md
    hover: bg-red-800 transition duration-100
    ease-in-out 
    active:bg-red-900
    '>
        <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
        Continue With Google
    </button>
  )
}

export default OAuth