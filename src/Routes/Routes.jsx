import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToy from "../Pages/AllToys/SingleToy";
import AddToy from "../Pages/ToyCrud/AddToy";
import UserToy from "../Pages/UserToy/UserToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home />,
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
          loader: ()=> fetch('http://localhost:5000/toys')
        },
        {
          path: "/toy/:id",
          element: <SingleToy />,
          loader: ({params})=> fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
          path: "/addtoy",
          element: <AddToy />        
        }
        ,
        {
          path: "/usertoy",
          element: <UserToy />        
        }
      ]
    }
  ]);

export default router;