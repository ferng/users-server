import { Schema } from 'mongoose'

export const GroupSchema: Schema = new Schema({
  level: { type: Number },
  name: { type: String, required: true }
})

