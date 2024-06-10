import React, { useContext } from "react";
import Bakground from "../../../../public/img/cool-background.png";
import { AuthContext } from "../../../context/authProvider";
// import Stack from '@mui/material/Stack';
// import LinearProgress from '@mui/material/LinearProgress';
import ContentLoader, { Facebook } from "react-content-loader";
import StoryFrom from "../../../shared/storyFrom";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
  const { user, loading } = useContext(AuthContext);
  // console.log(user)
  // if(loading){
  //   return <div>
  //      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
  //     <LinearProgress color="secondary" />
  //     <LinearProgress color="success" />
  //     <LinearProgress color="inherit" />
  //   </Stack>
  //   </div>
  // }
  if (loading) {
    return (
      <div>
        <ContentLoader viewBox="0 0 380 70">
          {/* Only SVG shapes */}
          <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
          <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
          <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>
      </div>
    );
  }
  return (
    <div className="container mx-auto text-black">
      <Helmet>
        <title>{user.displayName} profile</title>
      </Helmet>
      <div
        className="hero mt-2 min-h-[80vh] flex justify-center  gap-10"
        style={{ backgroundImage: `url(${Bakground})` }}
      >
        <div>
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <h1 className="text-5xl font-bold">{user.displayName}</h1>
              <p>Email: {user.email}</p>
              <p className="">user id: {user.uid?.slice(0, 5) || "365aj"}</p>
              <p className="text-xl font-semibold">
                phone number: {user?.phoneNumber || "71***550100"}
              </p>
              <p className="">
                user varification: {user?.emailVerified || "False"}
              </p>
              <article>
                {user.displayName} is a spirited adventurer with an insatiable
                passion for exploring the world. With a well-worn backpack and a
                heart full of wanderlust, {user.displayName} thrives on the
                thrill of discovering new destinations. Each journey is a chance
                to immerse in diverse cultures, savor exotic cuisines, and
                connect with people from all walks of life. {user.displayName}'s
                travels are marked by spontaneous detours and unplanned
                adventures, whether it's trekking through dense rainforests,
                wandering ancient cobblestone streets, or basking on pristine
                beaches. The stories and experiences collected along the way are
                a testament to {user.displayName}'s love for travel, driving a
                perpetual quest to see and understand the world in all its
                vibrant beauty. Through travel, Alex finds joy, inspiration, and
                a profound sense of connection to the global community.
              </article>
            </div>

            <img src={user.photoURL} className="max-w-xl rounded-lg " />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <StoryFrom></StoryFrom>
      </div>
    </div>
  );
};

export default UserProfile;
