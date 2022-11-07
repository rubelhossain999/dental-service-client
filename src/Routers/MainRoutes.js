import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/UIDesign/Pages/Home";
import Main from "../Components/UIDesign/Pages/Main";
import Services from "../Components/UIDesign/Pages/Services";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
            path:'/', element: <Home></Home>
        },
        {
          path:'/services',
          element: <Services></Services>
        }
      ]
    }
  ]);

  export default router;