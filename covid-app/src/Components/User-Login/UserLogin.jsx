import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import './Userlogin.css'
import {ImUser} from 'react-icons/im'
import {useNavigate} from 'react-router-dom'


const UserLogin = () => {

    let navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => { 
        e.preventDefault()
      const  result = await fetch('http://localhost:3600/login', {
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

        if(result.error === "Invalid Username or Password"){ 
            setError("Invalid Username or Password")
        }else{ 
            setError('')
        }
        console.log(result.status)
        console.log(result.sessionId)
        console.log(result.username)
        
        if(result.status === "Ok"){ 
            navigate('/covid19')
        }

    }

    return(
        
        <div className=' w-500 max-w-[700px] px-10 py-19 rounded-3xl bg-white border-2 border-gray-100'>
            <div className=''>
              <h1 className='text-5xl mr-5 flex-col inline-block  font-semibold'>Log In<ImUser className='iconUser '/></h1>
        <hr />  
            </div>
        <div>
            <p className='text-red-500 text-lg'>{error}</p>
        </div>
        <div className='mt-8'>
        <form onSubmit={handleSubmit}>
            <div className=' flex-col'>
                <label className='text-lg font-medium'>Username</label>
                <input 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder="Enter your Username"/>
                    
                    
            </div>
            
            <div className=' flex-col mt-4'>
                <label className='text-lg font-medium'>Password</label>
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full  border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder="Enter your Password"
                    type={"password"}
                />
            </div>
            
            <div className='mt-8 flex flex-col gap-y-4'>

                    <Button value="Sign In" type="submit" />
            </div>
            
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium mr-1 text-base'>Don't have an account? </p>
               
                <a href='/Register' className="text-blue-700 font-semibold hover:text-blue-300 hover:cursor-pointer"> Sign Up</a>
            </div>
            </form>
        </div>


    </div>
)
}

export default UserLogin