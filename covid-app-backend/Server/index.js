const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const bcrypt = require("bcryptjs")
const User = require('./Model/User');
const jwt = require('jsonwebtoken')
// const registerUser = require("./Routes/UserRegisteRoute") ;


dotenv.config()
const { 
    PORT,
    DBPORT,
    DBNAME,
    HOST,
    URI,
    JWT_SECRET
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


        // Register User 

app.post('/Register', async (req, res) =>{ 
    console.log(req.body)

    const {username, password: plainTextPassword} = req.body

    if(!username || typeof username !== 'string') {
        return res.json({status: 'error', error: "Invalid Username"})
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({status: 'error', error: "Invalid Password"})
    }
    if(plainTextPassword.length < 8){ 
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

    // Login User

    app.post('/login', async (req, res) => { 

        const {username, password} = req.body

        const user = await User.findOne({ 
            username
        }).lean()

        if(!user){ 
            // fail
            return res.json({status: 'error', error: "Invalid Username or Password"})
        }

        if(bcrypt.compare(password, user.password)){

            const token = jwt.sign({
                 id: user._id, 
                 username: user.username
                }, JWT_SECRET)
             // success
             return res.json({status: 'Ok', data: token})
             
        }
        
        res.json({status: "error", error: 'Invalid Username or Password'})
    })

startServer()
