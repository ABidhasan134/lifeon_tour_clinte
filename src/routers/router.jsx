import { createBrowserRouter } from "react-router-dom";
import Error from "../error/error";
import Deshborde from "../layout/deshborde";
import Main from "../layout/main";
import LogIn from "../log/LogIn";
import LogOut from "../log/logOut";
import Allstroy from "../pages/Home/components/story/allstory.jsx/allstroy";
import AllPackage from "../pages/Home/components/tabs/components/all package/allPackage";
import Home from "../pages/Home/home";
import ReqForGuide from "../pages/dashbordes/userDashbord/reqForAdmin/reqForGuide";
import UserBooking from "../pages/dashbordes/userDashbord/userBooking.jsx/userBooking";
import UserProfile from "../pages/dashbordes/userDashbord/userProfile";
import WishList from "../pages/dashbordes/userDashbord/userWishList/wishList";
import Register from "../register/register";
import Successful from "../register/successful";
import CardDetails from "../shared/cardDitails";
import GuidsDitails from "../shared/guidsProfile";
import ViewCetagory from "../shared/viewCetagory";
import PriveteRoute from "./priveteRoute";
import GuideProfile from "../pages/dashbordes/guideDashbord/guideProfile/guideProfile";
import GuideToures from "../pages/dashbordes/guideDashbord/myAsstour/guideToure";
import GuideProtection from "./guideProtection";
import AdminRoute from "./adminRoute";
import AdminProfile from "../pages/dashbordes/amdinDashbord/adminProfile";
import AddPackeges from "../pages/dashbordes/amdinDashbord/addPackages/addPackeges";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: (
          <PriveteRoute>
            <CardDetails></CardDetails>
          </PriveteRoute>
        ),
        loader: ({ params }) => params.id,
      },
      {
        path: "/alltourdetail/:id",
        element: (
          <PriveteRoute>
            <ViewCetagory></ViewCetagory>
          </PriveteRoute>
        ),
        loader: ({ params }) => params.id,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/successregester",
        element: <Successful></Successful>,
      },
      {
        path: "/logout",
        element: <LogOut></LogOut>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/guideDetails/:id",
        element: (
          <PriveteRoute>
            <GuidsDitails></GuidsDitails>
          </PriveteRoute>
        ),
        loader: ({ params }) => params.id,
      },
      {
        path: "/allstory",
        element: <Allstroy></Allstroy>,
      },
      {
        path: "allpackage",
        element: <AllPackage></AllPackage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Deshborde></Deshborde>,
    children: [
      // normal user
      {
        path: "userprofile",
        element: (
          <PriveteRoute>
            <UserProfile></UserProfile>
          </PriveteRoute>
        ),
      },
      {
        path: "mybooking",
        element: (
          <PriveteRoute>
            <UserBooking></UserBooking>
          </PriveteRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PriveteRoute>
            <WishList></WishList>
          </PriveteRoute>
        ),
      },
      {
        path: "reqForAdmin",
        element: (
          <PriveteRoute>
            <ReqForGuide></ReqForGuide>
          </PriveteRoute>
        ),
      },
      // guide routes
      {
        path: 'guideprofile',
        element: <GuideProtection><GuideProfile></GuideProfile></GuideProtection>
      },
      {
        path: 'guideToures',
        element: <GuideProtection><GuideToures></GuideToures></GuideProtection>
      },
      // admin routes
      {
        path: "adminprofile",
        element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
      },
      {
        path: "addPackage",
        element: <AdminRoute><AddPackeges></AddPackeges></AdminRoute>
      }
    ],
  },
]);

export default router;
