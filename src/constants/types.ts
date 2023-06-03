import { Request } from 'express'

interface User {
  name: string
  email: string
  _id: string
}

export interface RequestType extends Request {
  user?: User
}
