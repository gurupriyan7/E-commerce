import { AddedToCartData } from './cart.interface'
import cartModel, { CartItems } from './cart.model'

const addedToCart = async (cartData: AddedToCartData) => {
  const { userId, prodId, quantity } = cartData
  const itemObj = {
    prodId,
    quantity,
  }

  const userCart = await cartModel.findOne({ userId })
  // console.log(userCart,"userCart");

  if (userCart) {
    const itemIndex = userCart.items.findIndex(
      (item: CartItems) => item.prodId.toString() === prodId,
    )

    if (itemIndex !== -1) {
      try {
        await cartModel.updateOne(
          { userId, 'items.prodId': prodId },
          {
            $inc: { 'items.$.quantity': 1 },
          },
        )
        return { message: 'cart updated' }
      } catch (error:any) {
        throw new Error(error)
      }
    } else {
      try {
        await cartModel.findOneAndUpdate(
          { userId },
          {
            $push: {
              items: itemObj,
            },
          },
        )
        return { message: 'cart updated' }
      } catch (error:any) {
        throw new Error(error)
      }
    }
  } else {
    const cartObj = {
      userId,
      items: [itemObj],
    }
    return await cartModel.create(cartObj)
  }
}

export const cartService = {
  addedToCart,
}
