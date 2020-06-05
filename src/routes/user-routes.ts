import * as express from 'express'
import { UserModel } from '../models/user/user-model'
import { IUserDocument } from '../models/user/user-types'
import * as methods from '../models/user/user-methods'

export class UserRoutes {

  static async get_users(request: express.Request, response: express.Response) {
    const userId = request.params[0]
    if (userId === "") {
      let users = await methods.getAllUsers()
      response.json(users)
    } else {
      let user = await methods.getUserById(userId)
      response.json(user)
    }
  }

}
