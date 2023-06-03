import { AddProduct, getAllProductsProps } from './product.interface'
import productModel from './product.model'

const addProduct = async (addProductData: AddProduct) => {
  return await productModel.create(addProductData)
}

const getAllProducts = async ({ query = {}, options }: getAllProductsProps) => {
  return await productModel.find(query, {}, options)
}

export const productService = {
  addProduct,
  getAllProducts,
}
