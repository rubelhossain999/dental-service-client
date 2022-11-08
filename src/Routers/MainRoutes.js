import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/UIDesign/Pages/Blogs";
import Error from "../Components/UIDesign/Pages/Error";
import Home from "../Components/UIDesign/Pages/Home";
import Main from "../Components/UIDesign/Pages/Main";
import Reviews from "../Components/UIDesign/Pages/Reviews";
import Services from "../Components/UIDesign/Pages/Services";
import Forgotpass from "../Firebase/AuthPages/Forgotpass";
import Login from "../Firebase/AuthPages/Login";
import Profile from "../Firebase/AuthPages/Profile";
import Signup from "../Firebase/AuthPages/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/reviews',
        element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/forgotpass',
        element: <Forgotpass></Forgotpass>
      },
      {
        path: '*',
        element: <Error></Error>
      },

    ]
  }
]);

export default router;