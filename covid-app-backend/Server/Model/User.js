const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: { 
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: { 
        type: String, 
        required: true, 
    }
}, { 
    collection: 'users'
})

module.exports = mongoose.model('UserSchema', UserSchema)