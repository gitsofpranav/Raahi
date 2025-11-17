import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
           type: String,
           requried:true,
           minLength: [3,'First name must be at least 3 characters long']
        },
        lastname:{
           type: String,
           minLength: [3,'Last name must be at least 3 characters long']    
        }
    },
    email: {
        type: String,
        requried:true,
        unique: true,
        minLength: [5, 'Email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false,
        
    },
    socketId: {
        type: String,
    }
})

userSchema.method.generateAuthToken = () =>{
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.method.comparePassword =async () =>{
    return await bcrypt.compare(password,this.password)
}

userSchema.method.hashPassword = async () =>{
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user',userSchema);

export default userModel = mongoose.model('user',userSchema);
