import { bcryptPassword, generateToken, verifyPassword } from '../../utils/authUtils'
import { CreateUserData, LoginData } from './user.interface'
import UserModel from './user.model'

const createUser = async (createUserData: CreateUserData) => {
  const { email, password, name } = createUserData
  const user = await UserModel.findOne({ email })
  if (user) {
    throw new Error('User Alredy Exists')
  }
  const hashedPassword = await bcryptPassword(password)

  return await UserModel.create({
    name,
    email,
    password: hashedPassword,
  })
}

const userLogin = async (loginData: LoginData) => {
  const { email,password } = loginData
  
  const user = await UserModel.findOne({ email })
  if (!user) {
    throw new Error('User Alredy Exists')
  }
  const passwordMatch = await verifyPassword(password, user.password)
  if (!passwordMatch) {
    throw new Error('Invalid Password')
  }

  return ({
    _id:user._id,
    name: user.name,
    email: user.email,
    token: generateToken(String(user._id)),
  })
}

export const userService = {
  createUser,
  userLogin
}