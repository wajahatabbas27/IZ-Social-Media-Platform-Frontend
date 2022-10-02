import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addPost,
  updatePost,
  deletePost,
  setCurrent,
} from "../actions/userDataActions";

const Timeline = ({
  current,
  addPost,
  updatePost,
  deletePost,
  setCurrent,
  userPosts,
}) => {
  const [body, setBody] = useState("");

  return (
    <div className='timeline'>
      <form action="">
        <h2>{!current ? "Add " : "Update"} Your Post</h2>
        <div className='form-control'>
          <label htmlFor='body'>
            {!current ? "Enter New" : "Update Your"} Post
          </label>
          <input
            type='text'
            name='body'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Enter Post Here!'
          />
        </div>
        <div className='controls'>
          {!current ? (
            <input
              type='submit'
              value='Add'
              className='btn add'
              onClick={(e) => {
                e.preventDefault();
                if (body === "") {
                  return alert("Enter some text inside body");
                }
                // it must be inside curly braces
                addPost({ body });
                setBody("");
              }}
            />
          ) : (
            <>
              <button
                className='btn update'
                onClick={() => {
                  if (body === "") {
                    alert("Enter some text inside body");
                  }
                  updatePost({
                    id: current.id,
                    body,
                  });
                  setBody("");
                }}
              >
                Update
              </button>
              <button
                className='btn cancel'
                onClick={() => {
                  setCurrent(null);
                  setBody("");
                }}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>

      <h1>My Posts</h1>
      {userPosts && userPosts.length > 0 ? (
        <ul className='posts'>
          {userPosts.map((post) => (
            <li key={post._id}>
              <small>Add Date: {post.date}</small>
              <p>{post.body}</p>
              <div className='controls'>
                <button
                  className='btn update'
                  onClick={() => {
                    // update click ho to uper form mein lejae yh current se hmein
                    setCurrent({
                      id: post._id,
                      body,
                    });
                    // body set krrhe hain post ki take form mein uper ki ae!
                    setBody(post.body);
                  }}
                >
                  Update
                </button>
                <button
                  className='btn delete'
                  onClick={() => {
                    deletePost(post._id);
                    setCurrent(null);
                    setBody("");
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Post Found</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.user.current,
  userPosts: state.user.userPosts,
});

export default connect(mapStateToProps, {
  addPost,
  updatePost,
  deletePost,
  setCurrent,
})(Timeline);
