import express from 'express'
import { productController } from '../modules/product/product.controller'
import { authMiddleware } from '../middlewares/authMiddleWare'

const router = express.Router()
const {protect}=authMiddleware
const { addProduct, getAllProducts } = productController


router.post('/',protect, addProduct)
router.get('/', getAllProducts)

export default router
