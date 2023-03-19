const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const bcrypt = require("bcryptjs")
const User = require('./Model/User');
const jwt = require('jsonwebtoken')
const cors = require('cors')
const uuid = require('uuid').v4
const cookieParser = require('cookie-parser')

dotenv.config()
const { 
    PORT,
    DBPORT,
    DBNAME,
    HOST,
    URI,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET
} = process.env;

const app = express(); 
app.use(cors())
app.use(cookieParser())
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
        return res.json({status: 'Ok', data: "User Created Successfuly"})
    }catch(error){ 
        if(error.code == 11000){ 
            return res.json({status: 'error', error: "Username already exist"})
        }
        throw error
    }

    // res.json({status: "ok"})
} )

    // MiddleWare
    // const authenticateToken = (req, res, next) => { 
    //     const authHeader = req.headers['authorization']
    //     const token = authHeader && authHeader.split(' ')[1]
    //     if(token == null) return res.sendStatus(401)

    //     jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => { 
    //         if (err) return res.sendStatus(403)
    //         res.json(user)
    //         next()
    //     })
    //  }

    //  const generateAccessToken = (user) => { 
    //     const tokken = jwt.sign(user, ACCESS_TOKEN_SECRET, {expiresIn: '2000s'})
       
    //  }

    // app.post('/user', authenticateToken, (req, res) => { 

        
    //     res.json(username)
    // }) 

       // session 

       

    // Login User

    const sessions = {}
    app.post('/login', async (req, res) => { 

        const {username, password} = req.body

        const user = await User.findOne({ 
            username
        }).lean()

        if(!user){ 
            // fail
            return res.json({status: 'error', error: "Invalid Username or Password"})
        }
        if(await bcrypt.compare(password, user.password)){
            const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET)
            // 

             // success
             const sessionId = uuid();
             sessions[sessionId] = {username, accessToken}
             res.cookie('sessionId', sessionId)
             res.json({status: 'Ok', sessionId, username});
            //  console.log(sessionId)
            //  console.log(username)
             
        }
        
        // res.json({status: "error", error: 'Invalid Username or Password'})
    })

    // get logined user 

    app.get('/singleUser', async (req, res) => { 
        const sessionId =  req.headers.cookie?.split('=')[1];
        const userSession = sessions[sessionId];
        // if(userSession){ 
         res.json({status: 'Ok', userSession, sessionId});
        //  res.send("Hello")

        // }
        // else{ 
        //      res.status(401)
        // }
    })

    // logout user 

    app.post('/logout', (req, res) => { 
    const sessionId =  req.headers.cookie?.split('=')[1];
    delete sessions[sessionId];
    res.set('Set-Cookie', `session=; expires=Thu , 01 Jan 1970 00:00:00 GMT`);
    res.send('Loged out')
    // res.redirect('http://localhost:3000')
    })

 
startServer()
