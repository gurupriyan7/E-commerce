import express from 'express'
import { productController } from '../modules/product/product.controller'

const router = express.Router()
const { addProduct, getAllProducts } = productController

router.post('/', addProduct)
router.get('/', getAllProducts)

export default router
