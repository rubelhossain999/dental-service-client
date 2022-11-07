import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/UIDesign/Pages/Home";
import Main from "../Components/UIDesign/Pages/Main";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
            path:'/', element: <Home></Home>
        }
      ]
    }
  ]);

  export default router;