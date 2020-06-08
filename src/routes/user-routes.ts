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


router.post('/*', async (req: express.Request, res: express.Response) => {
  let data = req.body
  let user = new UserModel(data)
  try {
    await methods.createUser(user)
    res.status(200).send('')
  } catch (error) {
    console.error(error)
    res.status(500).send('')
  }
})


router.put('/*', async (req: express.Request, res: express.Response) => {
  const userId = req.params[0]
  let data = req.body
  let user = data
  try {
    let what = await methods.updateUser(userId, user)
    res.status(200).send('')
  } catch (error) {
    console.error(error)
    res.status(500).send('')
  }
})


router.delete('/*', async (req: express.Request, res: express.Response) => {
  const userId = req.params[0]
  let data = req.body
  let user = data
  try {
    let what = await methods.deleteUser(userId)
    res.status(200).send('')
  } catch (error) {
    console.error(error)
    res.status(500).send('')
  }
})
