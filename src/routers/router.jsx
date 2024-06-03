import {createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/home";
import CardDetails from "../shared/cardDitails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "/details/:id",
          element: <CardDetails></CardDetails>,
          loader: (({params})=>params.id)
        }
      ]
    },
  ]);

  export default router;