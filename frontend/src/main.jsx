import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Error from "./pages/Error.jsx";
import AddSales from "./pages/AddSales.jsx";
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import TopSales from "./pages/TopSales.jsx"
import TopRevenue from "./pages/TotalRevenue.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path: "/addsales",
        element: <AddSales />,
      },
      {
        path:"/topsales",
        element:<TopSales />
      },
      {
        path:"/toprevenue",
        element:<TopRevenue />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={appRouter}/>
);
