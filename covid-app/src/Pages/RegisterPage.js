import React from 'react'
import UserRegister from '../Components/User-Register/UserRegister'


const RegisterPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <h1 className='absolute top-0 z-10 text-5xl font-semibold underline'>COVID Application</h1>
        <UserRegister />
    </div>
  )
}

export default RegisterPage