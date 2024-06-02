import {createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <div>hi there</div>
        }
      ]
    },
  ]);

  export default router;