import { Query } from "mongoose"
import { IUserDocument, IUserModel } from "./user-types"
import { UserModel } from './user-model'
import { GroupModel } from '../group/group-model'


export async function getUserById(
  userId: string
): Promise<IUserDocument> {
  let user : IUserDocument
  user = await UserModel.findById(userId).populate('groups').exec()
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
  users = await UserModel.find({}).populate('groups').exec()
  return users
}


export async function createUser(
  user: IUserDocument,
): Promise<IUserDocument> {
  let expectedGroups = user.groups.length
  await UserModel.populate(user, 'groups')
  if (expectedGroups === user.groups.length) {
    await UserModel.create(user)
  } else {
    const error = new Error('Group does not exist')
    error.name = 'InvalidData'
    throw error
  }
  return user
}


export async function updateUser(
  userId: string,
  user: IUserDocument
): Promise<IUserDocument> {
  let query: Query
  delete user._id
  let expectedGroups = user.groups.length
  await UserModel.populate(user, 'groups')
  if (expectedGroups === user.groups.length) {
    query = await UserModel.replaceOne({'_id': userId}, user)
    if (query.n === 0) {
      const error = new Error('User does not exist so was not updated')
      error.name = 'MissingResource'
      throw error
    } 
  } else {
    const error = new Error('Group does not exist')
    error.name = 'InvalidData'
    throw error
  }
  return query.value
}


export async function deleteUser(
  userId: string,
): Promise<IUserDocument> {
  let query: Query
  query = await UserModel.findByIdAndDelete({'_id': userId}, {'rawResult': true}).populate('groups')
  return query.value 
}
