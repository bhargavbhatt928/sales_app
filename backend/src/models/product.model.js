import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productId:{
      type:String,
      required:true,
      unique:true
    },
    productName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
