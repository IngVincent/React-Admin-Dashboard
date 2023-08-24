import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home"
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/Login/Login";
import "./styles/global.scss";
import Posts from "./pages/Posts/posts";
import Orders from "./pages/Orders/Orders";
import Elements from "./pages/Elements/Elements";
import User from "./pages/User/User";
import Product from "./pages/Product/Product";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/posts",
          element: <Posts />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/elements",
          element: <Elements />
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/Products/:id",
          element: <Product />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
