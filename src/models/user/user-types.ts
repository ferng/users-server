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

export interface IUserModel extends Model<IUserDocument> {
//   update: (
//     this: IUserModel,
//     {
//       _id,
//       name,
//       email,
//       dob,
//       created,
//       updated
//     }:{
//       _id: string
//       name: string
//       email: string
//       dob: Date
//       created: Date
//       updated: Date
//     }
//   ) => Promise<IUserDocument>


//   findById: (
//     this: IUserModel,
//     {
//       _id
//     }:{
//       _id: string
//     }
//   ) => Promise<IUserDocument>


//   find: (
//     this: IUserModel,
//     {
//       name,
//       email,
//       dob,
//       created,
//       updated
//     }:{
//       name: string
//       email: string
//       dob: Date
//       created: Date
//       updated: Date
//     }
//   ) => Promise<[IUserDocument]>


  //   deleteById: (
  //     this: IUserModel,
  //     {
  //       name,
  //       email,
  //       dob,
  //       created,
  //       updated
  //     }:{
  //       name: string
  //       email: string
  //       dob: Date,
  //       created: Date,
  //       updated: Date
  //     ) => Promise<IUserDocument>;
  // 
  //   updateById: (
  //     this: IUserModel,
  //     {
  //       name,
  //       email,
  //       dob,
  //       created,
  //       updated
  //     }:{
  //       name: string
  //       email: string
  //       dob: Date,
  //       created: Date,
  //       updated: Date
  //     ) => Promise<IUserDocument>;
}
