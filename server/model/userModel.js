import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: 3
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Username should be unique'],
        minLength: 3
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email should be unique'],
        lowerCase: true,
        validate: [validator.isEmail, 'Provide valid e-mail']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 8
    },
    image:{
        public_id:{
            type: String,
        },
        url:{
            type: String,
        }
    }
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    
    this.password = await bcrypt.hash(this.password, 12)

    next()
})

const User = mongoose.model('User', userSchema)

export default User