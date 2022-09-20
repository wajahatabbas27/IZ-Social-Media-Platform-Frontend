import React from "react";
import { connect } from "react-redux";
import Profile from "../../pages/Profile";
import NewsFeed from "../../pages/NewsFeed";
import Timeline from "../../pages/Timeline";

const Home = ({ selected }) => {
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
});

export default connect(mapStateToProps, null)(Home);
