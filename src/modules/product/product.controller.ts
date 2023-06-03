import { Request, Response } from 'express'
import { productService } from './product.service'
import { responseUtils } from '../../utils/response-utils'

const addProduct = async (req: Request, res: Response) => {
  try {
    const data = await productService.addProduct(req.body)
    return responseUtils.success(res, {
      data,
      status: 201,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const data = await productService.getAllProducts()
    return responseUtils.success(res, {
      data,
      status: 200,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

export const productController = {
  addProduct,
  getAllProducts
}
