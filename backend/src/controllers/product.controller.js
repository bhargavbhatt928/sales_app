import { Product } from "../models/product.model.js";
import { AsyncHandle } from "../utils/AsyncHandle.js";

const createProductEntry = AsyncHandle(async(req,res)=>{
    const {productId, productName, quantity, amount}=req.body
    const existingProductID = await Product.findOne({productId});
    if(existingProductID){
        throw new Error("ProductID already exists")
    }
    const productEntry = await Product.create({
        productId,
        productName,
        quantity,
        amount
    })
    const newProductEntry  = await Product.findById(productEntry._id);
    if(!newProductEntry){
        throw new Error("Internal error occurred while adding new product")
    }
    console.log(newProductEntry)
    res
    .status(200)
    .json("New Product added successfully")
})


export {createProductEntry}