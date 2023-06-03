import mongoose, { Document, ObjectId, Schema } from 'mongoose'
const ObjectId = Schema.Types.ObjectId

export interface CartItems extends Document {
  prodId: ObjectId
  quantity: number
}

const CartItemSchema = new Schema<CartItems>({
  prodId: { type: ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1, min: 1 },
})

const CartSchema: Schema = new mongoose.Schema(
  {
    userId: { type: ObjectId, ref: 'User', required: true },
    items: [CartItemSchema],
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Cart', CartSchema)
