import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "../../pages/Profile";
import NewsFeed from "../../pages/NewsFeed";
import Timeline from "../../pages/Timeline";
import { useNavigate } from "react-router-dom";

const Home = ({ selected, auth }) => {
  const navigate = useNavigate();
  
  // checking the token 
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [auth]);

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
  auth: state.user.auth,
});

export default connect(mapStateToProps, null)(Home);
