import {createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/home";
import CardDetails from "../shared/cardDitails";
import ViewCetagory from "../shared/viewCetagory";
import Error from "../error/error";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "/details/:id",
          element: <CardDetails></CardDetails>,
          loader: (({params})=>params.id)
        },
        {
          path: '/alltourdetail/:id',
          element: <ViewCetagory></ViewCetagory>,
          loader: (({params})=>params.id)
        }
      ]
    },
  ]);

  export default router;