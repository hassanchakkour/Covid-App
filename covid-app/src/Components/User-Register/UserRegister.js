import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import './UserRegister.css'
import {AiOutlineUser} from 'react-icons/ai'

const UserRegister = () => {
  return (
    <div>
        <div className=' w-500 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
            <div className=''>
              <h1 className='text-5xl flex flex-col  font-semibold'>Register</h1>
        <hr />  
            </div>
        
        <div className='mt-8'>
            <div className=' flex-col'>
                <label className='text-lg font-medium'>Username</label>
                <input 
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder="Enter your Username"/>
            </div>
            <div className=' flex-col mt-4'>
                <label className='text-lg font-medium'>Password</label>
                <input 
                    className='w-full  border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder="Enter your Password"
                    type={"password"}
                />
            </div>
            <div className=' flex-col mt-4'>
                <label className='text-lg font-medium'>Confirm Password</label>
                <input 
                    className='w-full  border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder="Enter your Password"
                    type={"password"}
                />
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>

                    <Button value="Sign up" type="submit" />
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium mr-1 text-base'>Already Have an Account?</p>
               
                <a href='/' className="text-blue-700 font-semibold hover:text-blue-300 hover:cursor-pointer"> Sign In</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default UserRegister