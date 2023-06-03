import { Request, Response } from 'express'

import { userService } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const data = await userService.createUser(req.body)
    res.status(201).json(data)
  } catch (error:any) {
    res.status(400)
    res.status(400).json(error.message)
  }
}

const userLogin = async (req: Request, res: Response) => {
  try {
    const data = await userService.userLogin(req.body)
    res.status(201).json(data)
  } catch (error:any) {
    res.status(400)
    res.status(400).json(error.message)
  }
}

export const userController = {
  createUser,
  userLogin,
}