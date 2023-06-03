import cartModel from './cart.model'

const addedToCart = async (cartData: any) => {
  return await cartModel.create(cartData)
}

export const cartService = {
  addedToCart,
}
