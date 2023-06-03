import { AddProduct } from './product.interface'
import productModel from './product.model'

const addProduct = async (addProductData: AddProduct) => {
  return await productModel.create(addProductData)
}

const getAllProducts = async ()=>{
return await productModel.find()
}

export const productService = {
  addProduct,
  getAllProducts
}
