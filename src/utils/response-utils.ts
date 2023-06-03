import { Response } from 'express'

interface CommonResponseType<T> {
  data: T
  status: number
}

interface ErrorResponseType {
  res: Response
  error: Error
  statusCode?: number
}

export const responseUtils = {
  success: <T>(
    resp: Response,
    { data, status = 200 }: CommonResponseType<T>,
  ) => {
    return resp.status(status).send({ data })
  },
  error: ({ res, error, statusCode }: ErrorResponseType) => {
    return res.status(statusCode || 500).send({ message: error.message })
  },
}
