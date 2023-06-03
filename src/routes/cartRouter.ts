import express from 'express'
import { cartController } from '../modules/cart/cart.controller'
import { authMiddleware } from '../middlewares/authMiddleWare'

const router = express.Router()

const {protect}=authMiddleware
const {
  addedToCart,
  getCartByUserId,
  removeProductFromCart,
  updateCart,
} = cartController

router.post('/',protect, addedToCart)
router.get('/user',protect, getCartByUserId)
router.patch('/remove',protect, removeProductFromCart)
router.patch('/',protect, updateCart)

export default router
