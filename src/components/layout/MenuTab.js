import React from "react";
import { connect } from "react-redux";
import { setSelected } from "../../actions/menuDataActions";

const MenuTab = ({ selected, setSelected }) => {
  return (
    <ul className='menu-tab'>
      <li
        className={selected === "profile" ? "selected" : "null"}
        onClick={() => setSelected("profile")}
      >
        My Profile
      </li>
      <li
        className={selected === "timeline" ? "selected" : "null"}
        onClick={() => setSelected("timeline")}
      >
        My Timeline
      </li>
      <li
        className={selected === "newsfeed" ? "selected" : "null"}
        onClick={() => setSelected("newsfeed")}
      >
        News Feed
      </li>
    </ul>
  );
};

// To use the state in the component we use this technique!
const mapStateToProps = (state) => ({
  selected: state.menu.selected,
});

export default connect(mapStateToProps, { setSelected })(MenuTab);
