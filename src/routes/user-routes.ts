import * as express from 'express'
import { UserModel } from '../models/user/user-model'
import { IUserDocument } from '../models/user/user-types'
import { getUserById } from '../models/user/user-methods'

export class UserRoutes {

  static async get_users(request: express.Request, response: express.Response) {
    const userId = request.params[0]
    let user = await getUserById(userId)
    response.json(user)
  }

}
