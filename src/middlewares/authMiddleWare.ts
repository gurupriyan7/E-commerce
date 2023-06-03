import { Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { appConfig } from '../config/appConfig'
import userModel from '../modules/user/user.model'

const protect = async (
  req: any ,
  res: Response,
  next: NextFunction,
) => {
  let token: any
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded:any = jwt.verify(token, appConfig.jwtSecret)
      if (decoded?.id) {
        req.user = await userModel.findById(decoded.id).select('-password')
      }

      next()
    } catch (error) {
      res.status(401).send({message:'Not Authroized'})
    }
  }
  if (!token) {
    res.status(401).send({message:'Not Authorized,No token'})
  }
}

export const authMiddleware = { protect }