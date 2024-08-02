

const TopSales = () => {
    return (
        <div className="flex flex-col p-5 items-center min-h-screen">
        <h1 className="text-3xl font-bold pt-4">TOP 5 SALES</h1>
  
  
        <table className="min-w-full">
          <thead className="font-bold border-b-2 border-black">
          <tr>
            <td className="text-left">#</td>
            <td className="text-left">Sales id:</td>
            <td className="text-left">Product Name</td>
            <td className="text-left">Quantity</td>
            <td className="text-left">Sales Amount</td>
          </tr>
          </thead>
         <tbody>
         <tr className="border-b-2">
            <td>1</td>
            <td>SI212</td>
            <td>Laptop</td>
            <td>2</td>
            <td>90000</td>
          </tr>
          <tr className="border-b-2 border-gray-300">
          <td>2</td>
            <td>SI423</td>
            <td>Mobile</td>
            <td>5</td>
            <td>85000</td>
          </tr>
         </tbody>
  
        </table>
        </div>
    );
}

export default TopSales;
