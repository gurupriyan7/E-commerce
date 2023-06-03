import mongoose, { Schema } from 'mongoose'

const ProductSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    location: {
      type: String,
    },
    urgentSelling: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Product', ProductSchema)
