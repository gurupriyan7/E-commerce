import mongoose, { Document, Schema } from 'mongoose'

const UserSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type:String,
    required:true,
  }
})

export default mongoose.model('User', UserSchema)