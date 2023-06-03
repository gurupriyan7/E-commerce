import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { appConfig } from '../config/appConfig'

export const bcryptPassword = async (password: string) => {
  // Hash-password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}
export const verifyPassword = async (
  password: string,
  hashPassword: string,
) => {
  return await bcrypt.compare(password, hashPassword)
}

export const generateToken = (id: string) => {
  const options = {
    expiresIn: '12h',
  }
  return jwt.sign({ id }, appConfig.jwtSecret, options)
}