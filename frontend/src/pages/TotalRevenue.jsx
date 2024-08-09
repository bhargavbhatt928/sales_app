import { useEffect, useState } from "react";
import axios from "axios";

const TotalRevenue = () => {
    const [revenue, setRevenue] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("/sales/totalRevenue");
          setRevenue(response.data); 
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
    return (
        <div className="flex flex-col items-center text-3xl font-bold pt-4">
           <h1>TODAY'S REVENUE IS: {revenue.totalRevenue}</h1> 
        </div>
    );
}

export default TotalRevenue;
