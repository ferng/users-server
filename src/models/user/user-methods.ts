import { IUserDocument, IUserModel } from "./user-types"
import { UserModel } from './user-model'


export async function getUserById(
  userId: string
): Promise<IUserDocument> {
  let myUser : IUserDocument
  await UserModel.findById(userId, function (err, user) { myUser = new UserModel(user) } )
  return myUser
}

// export async function create(
//   this: IUserModel,
//   name: string,
//   email: string,
//   dob: Date,
//   created: Date,
//   updated: Date
// ): Promise<IUserDocument> {
//   const query = await this.create({ name, email, dob, created, updated });
//   return query;
// }
// 
// export async function findById(
//   userId: string
// ): Promise<IUserDocument> {
//   const query = await this.findById({ _id: userId });
//   console.log(query)
//   return query;
// }

// 
// export async function deleteById(
//   this: IUserModel,
//   userId: string
// ): Promise<IUserDocument> {
//   const record = await this.findOne({ userId });
//   return record;
// }
// 
// export async function updateById(
//   this: IUserModel,
//   userId: string
// ): Promise<IUserDocument> {
//   const record = await this.findByIdAndUpdate({ userId });
//   return record;
// }
