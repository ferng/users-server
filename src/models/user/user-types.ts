import { Document, Model } from 'mongoose'


export interface IUser {
  _id: String
  name: string
  email: string
  dob: Date
  created: Date
  updated: Date
}

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends Model<IUserDocument> { }
