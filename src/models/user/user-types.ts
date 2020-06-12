import { Document, Model } from 'mongoose'

import { IGroup } from '../group/group-types'

export interface IUser {
  _id: String
  name: String
  email: String
  dob: Date
  created: Date
  updated: Date
  groups: [IGroup]
}

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends Model<IUserDocument> { }
