import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import Success from './Success/Success'
import './UserRegister.css'


const UserRegister = () => {

    

const [confirmPass, setConfirmPass] = useState('');
 const [errconfirm, setErrconfirm] = useState('')
const [errorPass, setErrorPass] = useState('');
const [errorusername, setErrorusername] = useState('');
const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => { 
        e.preventDefault()
      const  result = await fetch('http://localhost:3600/Register', {
            method: 'POST',
            headers: { 
                "content-Type":"application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((res) => res.json())

        console.log(result)

        if(username === ''){ 
            setErrorusername("Username can't be Empty")
        }else{ 
            setErrorusername("")
        }
        if(username < 5){ 
            setErrorusername("Username Must be More than 5 Characters")
        }else{ 
            setErrorusername("")
        }
        if(result.error === "Username already exist"){ 
            setErrorusername(result.error)
        }

        if(password.length < 8){ 
            setErrorPass(result.error)
        }else { 
            setErrorPass('')
        }
        
        if(confirmPass !== password){
            setErrconfirm('Passwords Must be Identical')
        }else{ 
            setErrconfirm('')
        }
        if(result.data == "User Created Successfuly"){ 
            setSuccess(true)
        }
        console.log(result.data)
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   


  return (
    <div>
        
        <div className=' w-500 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
            <div className=''>
              <h1 className='text-5xl flex flex-col  font-semibold'>Register</h1>
        <hr />  
            </div>
        
        <div className='mt-8'>
        <form onSubmit={handleSubmit}>
            <div className=' flex-col'>
                <label className='text-lg text-gray-600 font-medium'>Username</label>
                <input 
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your Username"/>
                    <p className='text-red-500'>{errorusername}</p>
            </div>
            <div className=' flex-col mt-4'>
                <label className='text-lg text-gray-600 font-medium'>Password</label>
                <input 
                    className='w-full  border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder="Enter your Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={"password"}
                />
                <p className='text-red-500'>{errorPass}</p>
            </div>
            <div className=' flex-col mt-4'>
                <label className='text-lg text-gray-600 font-medium'>Confirm Password</label>
                <input 
                    className='w-full  border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder="Confirm your Password"
                    onChange={(e) => setConfirmPass(e.target.value)}
                    value={confirmPass}
                    type={"password"}
                />
                <p className='text-red-500'>{errconfirm}</p>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>

                    <Button value="Sign up"/>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium mr-1 text-base'>Already Have an Account?</p>
               
                <a href='/' className="text-blue-700 font-semibold hover:text-blue-300 hover:cursor-pointer"> Sign In</a>
            </div>
            </form>
        </div>
    </div>
    <div>

    </div>
     { success && <Success />}
    </div>
    
  )

  
}

export default UserRegister