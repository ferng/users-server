import { Schema } from 'mongoose'
// import { create, findById, deleteById, updateById } from './user-methods'
import { create, findById } from './user-methods'

const UserSchema: Schema = new Schema({
  _id: { type: String },
  name: { type: String, required: true },
  email: { type: String },
  dob: { type: Date},
  created: { type: Date },
  updated: { type: Date }
})

UserSchema.methods.create = create 
UserSchema.methods.findById = findById 
// UserSchema.methods.deleteById = deleteById 
// UserSchema.methods.updateById = updateById 

export default UserSchema
