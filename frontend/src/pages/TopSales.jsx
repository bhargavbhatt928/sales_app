import { useEffect, useState } from "react";
import axios from "axios";

const TopSales = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/sales/topSales");
        setProducts(response.data.data); 
        console.log(response.data.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col p-5 items-center min-h-screen">
      <h1 className="text-3xl font-bold pt-4">TOP 5 SALES</h1>

      <table className="min-w-full">
        <thead className="font-bold border-b-2 border-black">
          <tr>
            <td className="text-left">#</td>
            <td className="text-left">Product Id:</td>
            <td className="text-left">Product Name</td>
            <td className="text-left">Quantity</td>
            <td className="text-left">Sales Amount</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id} className="border-b-2">
              <td>{index + 1}</td>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.quantity}</td>
              <td>{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSales;