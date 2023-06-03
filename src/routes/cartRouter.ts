import express from 'express'
import { cartController } from '../modules/cart/cart.controller'

const router = express.Router()

const {
  addedToCart,
  getCartByUserId,
  removeProductFromCart,
  updateCart,
} = cartController

router.post('/', addedToCart)
router.get('/:userId', getCartByUserId)
router.patch('/remove/:userId', removeProductFromCart)
router.patch('/:userId', updateCart)

export default router
