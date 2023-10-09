import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Prizes from "../pages/Prizes/Prizes";
import Hackathons from "../pages/Hackathons/Hackathons";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/", 
            element: <Home></Home>, 
            loader: () => fetch("/services.json")
        }, 
        {
            path: "/about", 
            element: <About></About>
        }, 
        {
            path: "/prizes", 
            element: <PrivateRoute><Prizes></Prizes></PrivateRoute>
        },
        {
            path: "/hackathons", 
            element: <PrivateRoute><Hackathons></Hackathons></PrivateRoute>
        },
        {
            path: "/register", 
            element: <Register></Register>
        },
        {
            path: "/login", 
            element: <Login></Login>
        },
        {
            path: "/service-details/:id", 
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: () => fetch('../services.json')
        },
      ]
    },
  ]);
  export default router