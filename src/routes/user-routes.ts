import * as express from 'express'
import { UserModel } from '../models/user/user-model';

export class UserRoutes {
  
  static async get_users(request: express.Request, response: express.Response) {
    const userId = request.params[0]
    console.log(userId)
    UserModel.findById(userId, function (err, user) { console.log(user) } );
//     let user = new UserModel({ name: "Phil Potts", email: "phil@email.com", dob: "1980-01-01", created: Date.now(), updated: Date.now() })
//     await UserModel.create(user);
  }

}
