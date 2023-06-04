import { Request, Response } from 'express'
import { responseUtils } from '../../utils/response-utils'
import { cartService } from './cart.service'
import { RequestType } from 'constants/types'

const addedToCart = async (req: RequestType, res: Response) => {
  try { 
    const data = await cartService.addedToCart({...req.body,userId:req?.user?._id})
    return responseUtils.success(res, {
      data,
      status: 200,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

const getCartByUserId = async (req:RequestType,res:Response)=>{
  try {
    if(!req?.user){
      throw new Error("User Not found")
    }
    const data = await cartService.getCartByUserId(req?.user?._id)
    return responseUtils.success(res, {
      data,
      status: 200,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

const removeProductFromCart = async ( req:RequestType,res:Response)=>{
  try {
    if(!req?.user){
      throw new Error("User Not Found")
    }
    const {prodId}=req.query
    if(prodId){
      const data = await cartService.removeProductFromCart(req.user?._id,prodId as string)
      return responseUtils.success(res, {
        data,
        status: 200,
      })
    }
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

const updateCart = async (req:RequestType,res:Response)=>{
  try {
    if(!req?.user){
      throw new Error("User Not Found")
    }
    console.log(req.body,"rewq");
    
    const { prodId } = req.query
    const data = await cartService.updateCart({
      userId: req.user?._id,
      prodId: prodId as string,
     quantity: Number(req?.body?.quantity)
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
