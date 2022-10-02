import React from "react";
import { connect } from "react-redux";

const NewsFeed = ({ allPosts, user }) => {
  const myId = user._id;

  return (
    <div className='newsfeed'>
      <h1>NewsFeed</h1>
      {allPosts && allPosts.length > 0 ? (
        <ul className='posts'>
          {allPosts.map((post, index) => (
            <li key={index} className={post.user === myId ? "my-post" : ""}>
              <h4>Owner: {post.user}</h4>
              <small>Add Date: {post.date}</small>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Posts Found.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  allPosts: state.user.allPosts,
  user: state.user.user,
});

export default connect(mapStateToProps, null)(NewsFeed);
