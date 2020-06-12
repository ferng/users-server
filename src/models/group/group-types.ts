import { Document, Model } from 'mongoose'


export interface IGroup {
  _id: String
  level: Number
  name: String
}

export interface IGroupDocument extends IGroup, Document {}

export interface IGroupModel extends Model<IGroupDocument> { }
