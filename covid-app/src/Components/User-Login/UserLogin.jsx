import React from 'react'
import { useState } from 'react'


const UserLogin = () => {
    const[username, setUserame] = useState('');
    const[password, setPassword] = useState('');

    const Login = async () = { 

    }

  return (
    <div>
        <div>
            User Login
        </div>
        <br /><br /><br />
        <div>
            <form onSubmit={Login}>
                <label htmlFor="username">
                    UserName
                </label>
                <input 
                type="text" 
                value={username}
                onChange={(e) => setUserame(e.target.value)}
                 />
                <br />
                <br />
                <br />
                <label htmlFor="password">
                    Password
                </label>
                <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <input type="submit"
                value={"Log In"} />
            </form>
        </div>
    </div>
  )
}

export default UserLogin