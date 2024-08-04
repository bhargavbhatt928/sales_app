import axios from "axios"
import { useState } from "react";

const AddSales = () => {
  const [product, setProduct]=useState({
    productId:"",
    productName:"",
    quantity:"",
    amount:""
  })
  const addProduct =async (e)=>{
    e.preventDefault()
    try {
  
      const res = await axios.post("/sales/newProductEntry",product);
      console.log("Product added successfully", res.data)
      window.location="/"
    } catch (error) {
      console.log("Internal error occurred while adding new product");
      
    }
  }
    return (
        <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-3xl font-bold pt-4">ADD SALE ENTRY</h1>
        <hr/>
        <form  className="flex flex-col mt-4 mx-auto w-full px-4 space-y-4">
        <label className="block leading-4 pt-2">Product ID</label>
        <input
        type="text"
        value={product.productId}
        onChange={(e)=>setProduct({...product, productId:e.target.value})}
         className="block w-full rounded-sm border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
        <label className="block leading-4 pt-2">Product Name</label>
        <input
        type="text"
        value={product.productName}
        onChange={(e)=>setProduct({...product, productName:e.target.value})}
         className="block w-full rounded-sm border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
          <label className="block leading-4 pt-2">Quantity</label>
        <input
        type="text"
        value={product.quantity}
        onChange={(e)=>setProduct({...product, quantity:e.target.value})}
         className="block w-full rounded-sm border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
           <label className="block leading-4 pt-2">Amount</label>
        <input
        type="text"
        value={product.amount}
        onChange={(e)=>setProduct({...product, amount:e.target.value})}
         className="block w-full rounded-sm border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
        <button className="p-2 border border-gray-300 bg-blue-500 text-white w-full rounded-md" onClick={addProduct}>
          Submit
          </button>
        </form>
     
        </div>
    );
}

export default AddSales;
