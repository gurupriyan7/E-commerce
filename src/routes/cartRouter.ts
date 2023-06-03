import express from 'express'
import { cartController } from '../modules/cart/cart.controller'

const router = express.Router()

const { addedToCart } = cartController

router.post('/', addedToCart)

export default router
