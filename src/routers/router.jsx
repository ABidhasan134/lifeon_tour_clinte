import {createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/home";
import CardDetails from "../shared/cardDitails";
import ViewCetagory from "../shared/viewCetagory";
import Error from "../error/error";
import Register from "../register/register";
import Successful from "../register/successful";
import LogOut from '../log/logOut'
import LogIn from '../log/LogIn';
import PriveteRoute from "./priveteRoute";
import GuidsDitails from "../shared/guidsProfile";
import Allstroy from "../pages/Home/components/story/allstory.jsx/allstroy";
import AllPackage from "../pages/Home/components/tabs/components/all package/allPackage";
import Deshborde from "../layout/deshborde";
import UserDashbord from "../pages/dashbordes/userDashbord/userDashbord";

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
          element: <PriveteRoute><CardDetails></CardDetails></PriveteRoute>,
          loader: (({params})=>params.id)
        },
        {
          path: '/alltourdetail/:id',
          element: <PriveteRoute><ViewCetagory></ViewCetagory></PriveteRoute> ,
          loader: (({params})=>params.id)
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/successregester",
          element: <Successful></Successful>
        },
        {
          path: "/logout",
          element: <LogOut></LogOut>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>

        },
        {
          path: "/guideDetails/:id",
          element: <PriveteRoute><GuidsDitails></GuidsDitails></PriveteRoute>,
          loader: ({params})=>params.id
        },
        {
          path: "/allstory",
          element: <Allstroy></Allstroy>
        },
        {
          path: "allpackage",
          element: <AllPackage></AllPackage>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Deshborde></Deshborde>,
      children: [
      {
        path: "userprofile",
        element: <UserDashbord></UserDashbord>
      }
    ]
    }
  ]);

  export default router;