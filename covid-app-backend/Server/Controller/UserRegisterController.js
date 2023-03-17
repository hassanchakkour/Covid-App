const User = require('../Model/User');
const bcrypt = require("bcryptjs")


const registerUser = async (req, res) =>{ 
    console.log(req.body)

    const {username, password: plainTextPassword} = req.body

    const password = await bcrypt.hash(plainTextPassword, 10)

    try{ 
        const response = await User.create({
            username, 
            password
        })
        res.json('user created successfuly')
    }catch(err){ 
        console.log(err.message)
        return res.json({status: err})
    }
} 



module.exports = { 
    registerUser
}