import mongoose from 'mongoose'
import { CartData } from './cart.interface'
import cartModel, { CartItems } from './cart.model'
const ObjectId = mongoose.Types.ObjectId

const addedToCart = async (cartData: CartData) => {
  const { userId, prodId, quantity } = cartData
  const itemObj = {
    prodId,
    quantity,
  }

  const userCart = await cartModel.findOne({ userId })

  if (userCart) {
    const itemIndex = userCart.items.findIndex(
      (item: CartItems) => item.prodId.toString() === prodId,
    )

    if (itemIndex !== -1) {
      return { message: 'Item already added to cart' }
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

const getCartByUserId = async (userId: string) => {
  const data = await cartModel.findOne({ userId }).populate({path:"items.prodId"})
  
  if (!data) {
    throw new Error('Empty Cart')
  }

  const countData = await cartModel.aggregate([
    {
      $match: { userId: new ObjectId(userId) },
    },
    {
      $group: {
        _id: null,
        itemCount: { $sum: { $size: '$items' } },
      },
    },
  ])

  return { data, cartCount: countData[0]?.itemCount }
}

const removeProductFromCart = async (userId: string, prodId: string) => {
  try {
    const countData = await cartModel.aggregate([
      {
        $match: { userId: new ObjectId(userId) },
      },
      {
        $group: {
          _id: null,
          itemCount: { $sum: { $size: '$items' } },
        },
      },
    ])
   const productCount= countData[0]?.itemCount
    if(Number(productCount)> 1){
      await cartModel.updateOne(
        { userId },
        {
          $pull: { items: { prodId: new ObjectId(prodId) } },
        },
      )
  
      return { message: 'Product removed' }
    }else{
      await cartModel.deleteOne({ userId })
      return { message: 'Cart removed' }
    }
  } catch (error:any) {
    throw new Error(error)
  }
}

const updateCart = async ({ userId,quantity, prodId }: CartData) => {
  await cartModel.updateOne(
    { userId, 'items.prodId': prodId },
    {
     quantity
    },
  )
  return { message: 'cart updated' }
}

export const cartService = {
  addedToCart,
  getCartByUserId,
  updateCart,
  removeProductFromCart,
}
