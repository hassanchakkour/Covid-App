import React from 'react'
import UserLogin from '../Components/User-Login/UserLogin'

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <h1 className='absolute top-0 text-5xl font-semibold underline'>COVID Application</h1>
        <UserLogin />
    </div>
  )
}

export default LoginPage