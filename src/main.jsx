import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import AuthProvider from "./Provider/AuthProvider.jsx";
import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
);
