import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "../../pages/Profile";
import NewsFeed from "../../pages/NewsFeed";
import Timeline from "../../pages/Timeline";
import { useNavigate } from "react-router-dom";
import {
  getAllPosts,
  getUser,
  getUserPosts,
} from "../../actions/userDataActions";
import Spinner from "./Spinner";

const Home = ({
  selected,
  auth,
  getUser,
  user,
  userLoading,
  userPosts,
  getUserPosts,
  getAllPosts,
  allPosts,
  userPostsLoading,
  allPostsLoading,
}) => {
  const navigate = useNavigate();

  // checking the token
  useEffect(() => {
    if (!localStorage.getItem("iz-auth-token")) {
      navigate("/login");
    }

    //=====================================================
    // Calling the data of the user here as it is login
    // Calling the userdata here to show in profile
    //=====================================================
    if (!user && auth) {
      getUser();
    } else {
      if (user && !userPosts) {
        getUserPosts(user._id);
      }
      if (user && !allPosts) {
        getAllPosts();
      }
    }

    // eslint-disable-next-line
  }, [auth, user, userPosts, allPosts]);

  // If no user or userLoading is true so show Spinner component else
  if (!user || userLoading || allPostsLoading || userPostsLoading) {
    return <Spinner />;
  }

  return (
    <main>
      {selected === "profile" ? (
        <Profile />
      ) : selected === "timeline" ? (
        <Timeline />
      ) : (
        <NewsFeed />
      )}
    </main>
  );
};

const mapStateToProps = (state) => ({
  selected: state.menu.selected,
  user: state.user.user,
  auth: state.user.auth,
  userPosts: state.user.userPosts,
  allPosts: state.user.allPosts,
  userLoading: state.user.userLoading,
  userPostsLoading: state.user.userPostsLoading,
  allPostsLoading: state.user.allPostsLoading,
});

export default connect(mapStateToProps, { getUser, getUserPosts, getAllPosts })(
  Home
);
