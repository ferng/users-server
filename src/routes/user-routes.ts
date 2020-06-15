import * as express from "express";

import { UserModel } from '../models/user/user-model'
import { IUserDocument } from '../models/user/user-types'
import * as methods from '../models/user/user-methods'
import * as logger from "../utils/logger"

export const router = express.Router()
const log = logger.getLogger()

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
    log.error(error)
    if (error.name === 'ValidationError') {
      res.status(400)
    } else if (error.name === 'MissingResource')  {
      res.status(404)
    } else {
      res.status(500)
      error.message = 'Internal Server Error'
    }
    res.set('Content-Type', 'text/plain')
    res.send(error.message)
  }
})


router.post('/*', async (req: express.Request, res: express.Response) => {
  let data = req.body
  let user = new UserModel(data)
  try {
    await methods.createUser(user)
    res.status(200)
    res.json(user)
  } catch (error) {
    log.error(error)
    if (error.name === 'ValidationError' || error.name === 'InvalidData') {
      res.status(400)
    } else {
      res.status(500)
      error.message = 'Internal Server Error'
    }
    res.set('Content-Type', 'text/plain')
    res.send(error.message)
  }
})


router.put('/*', async (req: express.Request, res: express.Response) => {
  const userId = req.params[0]
  let data = req.body
  let user = new UserModel(data)
  try {
    await methods.updateUser(userId, user)
    res.status(200)
    res.json(user)
  } catch (error) {
    log.error(error)
    if (error.name === 'ValidationError' || error.name === 'InvalidData') {
      res.status(400)
    } else if (error.name === 'MissingResource')  {
      res.status(404)
    } else {
      res.status(500)
      error.message = 'Internal Server Error'
    }
    res.set('Content-Type', 'text/plain')
    res.send(error.message)
  }
})


router.delete('/*', async (req: express.Request, res: express.Response) => {
  const userId = req.params[0]
  try {
    let user = await methods.deleteUser(userId)
    res.status(200)
    res.json(user)
  } catch (error) {
    log.error(error)
    if (error.name === 'ValidationError') {
      res.status(400)
    } else {
      res.status(500)
      error.message = 'Internal Server Error'
    }
    error.message = 'Internal Server Error'
    res.set('Content-Type', 'text/plain')
    res.send(error.message)
  }
})
