import { IUserDocument, IUserModel } from "./user-types";


export async function create(
  this: IUserModel,
  name: string,
  email: string,
  dob: Date,
  created: Date,
  updated: Date
): Promise<IUserDocument> {
  const query = await this.create({ name, email, dob, created, updated });
  return query;
}

export async function findById(
  this: IUserModel,
  userId: string
): Promise<IUserDocument> {
  const query = await this.findById({ _id: userId });
  return query;
}

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
