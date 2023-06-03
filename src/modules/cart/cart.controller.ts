import { Request, Response } from 'express'
import { responseUtils } from '../../utils/response-utils'
import { cartService } from './cart.service'

const addedToCart = async (req: Request, res: Response) => {
  try {
    const data = await cartService.addedToCart(req.body)
    return responseUtils.success(res, {
      data,
      status: 201,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

export const cartController = {
  addedToCart,
}
