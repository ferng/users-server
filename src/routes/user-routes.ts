import * as express from "express";
import { UserModel } from '../models/user/user-model'
import { IUserDocument } from '../models/user/user-types'
import * as methods from '../models/user/user-methods'

export const router = express.Router()

router.get('/*', async (req: express.Request, res: express.Response) => {
  const userId = req.params[0]
  try {
    res.status(200)
    if (userId === "") {
      let users = await methods.getAllUsers()
      res.json(users)
    } else {
      let user = await methods.getUserById(userId)
      res.json(user)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('')
  }
})


//   static async put_user(req: express.Request, res: express.Response) {
//     let data = req.body
//     let user = new UserModel(data)
//     console.log(user)
//       res.status(200).send('')
//   }
// }
