import mongoose, { Schema } from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const CartSchema: Schema = new mongoose.Schema(
  {
    prodId: {
      type: ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    userId: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
  },

  {
    timestamps: true,
  },
)

export default mongoose.model('Cart', CartSchema)
