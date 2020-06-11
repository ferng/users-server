import { Query } from "mongoose"
import { IUserDocument, IUserModel } from "./user-types"
import { UserModel } from './user-model'


export async function getUserById(
  userId: string
): Promise<IUserDocument> {
  let user : IUserDocument
  user = await UserModel.findById(userId)
  if (user === null) {
    const error = new Error('User does not exist')
    error.name = 'MissingResource'
    throw error
  }
  return user
}


export async function getAllUsers(
): Promise<[IUserDocument]> {
  let users : [IUserDocument]
  users = await UserModel.find({} )
  return users
}


export async function createUser(
  user: IUserDocument
): Promise<IUserDocument> {
  await UserModel.create(user);
  return user
}


export async function updateUser(
  userId: string,
  user: IUserDocument
): Promise<IUserDocument> {
  let query: Query
  delete user._id
  query = await UserModel.replaceOne({'_id': userId}, user)
  if (query.n === 0) {
    const error = new Error('User does not exist so was not updated')
    error.name = 'MissingResource'
    throw error
  }
  return query.value
}


export async function deleteUser(
  userId: string,
): Promise<IUserDocument> {
  let query: Query
  query = await UserModel.findByIdAndDelete({'_id': userId}, {'rawResult': true})
  return query.value 
}
