import { Schema } from 'mongoose'

export const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  dob: { type: Date},
  created: { type: Date },
  updated: { type: Date }
})

