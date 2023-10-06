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
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/", 
            element: <Home></Home>
        }, 
        {
            path: "/about", 
            element: <About></About>
        }, 
        {
            path: "/prizes", 
            element: <Prizes></Prizes>
        },
        {
            path: "/hackathons", 
            element: <Hackathons></Hackathons>
        },
        {
            path: "/login", 
            element: <Login></Login>
        },
        {
            path: "/register", 
            element: <Register></Register>
        },
      ]
    },
  ]);
  export default router