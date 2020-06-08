import { IUserDocument, IUserModel } from "./user-types"
import { UserModel } from './user-model'


export async function getUserById(
  userId: string
): Promise<IUserDocument> {
  let user : IUserDocument
  user = await UserModel.findById(userId)
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
  try {
    await UserModel.create(user);
  } catch (error) {
    console.error(error)
  }
  return user
}


export async function updateUser(
  userId: string,
  user: IUserDocument
): Promise<IUserDocument> {
  try {
    await UserModel.replaceOne({_id: userId}, user)
  } catch (error) {
    console.error(error)
  }
  return user
}


export async function deleteUser(
  userId: string,
): Promise<boolean> {
  try {
    await UserModel.findByIdAndDelete({_id: userId})
  } catch (error) {
    console.error(error)
  }
  return true
}
