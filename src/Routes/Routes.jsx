import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToy from "../Pages/AllToys/SingleToy";
import AddToy from "../Pages/ToyCrud/AddToy";
import UserToy from "../Pages/UserToy/UserToy";
import UpdateToy from "../Pages/UserToy/UpdateToy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/alltoys",
          element: <AllToys />,
          loader: ()=> fetch('https://toys-house-server.vercel.app/toys')
        },
        {
          path: "/toy/:id",
          element: <PrivateRoutes> <SingleToy /></PrivateRoutes>,
          loader: ({params})=> fetch(`https://toys-house-server.vercel.app/toy/${params.id}`)
        },
        {
          path: "/addtoy",
          element:  <PrivateRoutes><AddToy /></PrivateRoutes>
        }
        ,
        {
          path: "/usertoy",
          element: <PrivateRoutes><UserToy /></PrivateRoutes>
        }
        ,
        {
          path: "/updatetoy/:id",
          element: <UpdateToy /> ,
          loader: ({params})=> fetch(`https://toys-house-server.vercel.app/toy/${params.id}`)      
        }
      ]
    }
  ]);

export default router;