import { Schema } from 'mongoose'

import { GroupSchema } from '../group/group-schema'

export const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  dob: { type: Date},
  created: { type: Date },
  updated: { type: Date },
  groups: [{ type: Schema.Types.ObjectId, ref: 'group', required: true}]
})

