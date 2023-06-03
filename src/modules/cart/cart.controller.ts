import { Request, Response } from 'express'
import { responseUtils } from '../../utils/response-utils'
import { cartService } from './cart.service'

const addedToCart = async (req: Request, res: Response) => {
  try {
    const data = await cartService.addedToCart(req.body)
    return responseUtils.success(res, {
      data,
      status: 200,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

const getCartByUserId = async (req:Request,res:Response)=>{
  try {
    const data = await cartService.getCartByUserId(req.params.userId)
    return responseUtils.success(res, {
      data,
      status: 200,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

const removeProductFromCart = async ( req:Request,res:Response)=>{
  try {
    const {prodId}=req.query
    if(prodId){
      const data = await cartService.removeProductFromCart(req.params.userId,prodId as string)
      return responseUtils.success(res, {
        data,
        status: 200,
      })
    }
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

const updateCart = async (req:Request,res:Response)=>{
  try {
    const { prodId, inc=false, quantity } = req.query
    const data = await cartService.updateCart({
      userId: req.params.userId,
      prodId: prodId as string,
     inc : inc as boolean,
      quantity :quantity as unknown as number,
    })
    return responseUtils.success(res, {
      data,
      status: 200,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

export const cartController = {
  addedToCart,
  getCartByUserId,
  removeProductFromCart,
  updateCart
}
