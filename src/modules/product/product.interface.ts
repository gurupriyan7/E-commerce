import { FilterQuery, QueryOptions } from 'mongoose'
import productModel from './product.model'

export interface AddProduct {
  name: string
  price: number
  image?: string
  quantiry?: number
  rating?: number
  location?: string
  urgentSelling?: boolean
}

export interface getAllProductsProps {
  query?: FilterQuery<typeof productModel>
  options?: QueryOptions
}
