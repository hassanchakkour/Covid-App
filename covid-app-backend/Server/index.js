const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const bcrypt = require("bcryptjs")
const User = require('./Model/User');
// const registerUser = require("./Routes/UserRegisteRoute") ;


dotenv.config()
const { 
    PORT,
    DBPORT,
    DBNAME,
    HOST,
    URI
} = process.env;

const app = express(); 
app.use(bodyParser.json());

    
         async function connectDB(){
        await mongoose.connect(URI);
        console.log("Connected to db!")
    }
        
    
  

async function startServer(){
    try{ 
       await connectDB();

         
        }
    catch(err){ 
        console.log("Failed connecting to DB due to :" + err)
    }
        
}

app.listen(PORT, () => { 
    console.log(`Server Started at Port ${PORT}`)
})

app.post('/Register', async (req, res) =>{ 
    console.log(req.body)

    const {username, password: plainTextPassword} = req.body

    if(!username || typeof username !== 'string') {
        return res.json({status: 'error', error: "Invalid Username"})
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({status: 'error', error: "Invalid Password"})
    }
    if(plainTextPassword.length < 9){ 
        return res.json({status: 'error', error: "Password must be more than 8 characters "})
    }

    const password = await bcrypt.hash(plainTextPassword, 10)

    try{ 
        const response = await User.create({
            username, 
            password
        })
        res.json('user created successfuly')
        console.log("User Created", response)
    }catch(error){ 
        if(error.code == 11000){ 
            return res.json({status: 'error', error: "Username already exist"})
        }
        throw error
    }

    // res.json({status: "ok"})
} )

startServer()
