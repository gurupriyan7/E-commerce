export interface AddedToCartData {
  prodId: string
  userId: string
  quantity: number
}

export interface UpdateCartData extends AddedToCartData {
  inc?: boolean
}
