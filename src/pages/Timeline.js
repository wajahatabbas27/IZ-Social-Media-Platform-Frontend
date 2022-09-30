import React, { useState } from "react";
import { connect } from "react-redux";

const Timeline = ({ current }) => {
  const [body, setBody] = useState("");

  const myPosts = [
    {
      _id: "0",
      user: "0",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dicta illum obcaecati soluta voluptatibus. Reprehenderit cum, repellat tempore repudiandae amet soluta vitae velit esse consectetur, veniam, dolore nesciunt corrupti labore",
      date: "25-09-21",
    },
    {
      _id: "1",
      user: "0",
      body: "Lorem ipsum, dolor sit amet  cum, repellat tempore repudiandae amet soluta vitae velit esse consectetur, veniam, dolore nesciunt corrupti labore",
      date: "25-09-21",
    },
    {
      _id: "2",
      user: "0",
      body: " Reprehenderit cum, repellat tempore repudiandae amet soluta vitae velit esse consectetur, veniam, dolore nesciunt corrupti labore",
      date: "25-09-21",
    },
  ];

  return (
    <div className='timeline'>
      <form>
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
            <input type='submit' value='Add' className='btn add' />
          ) : (
            <>
              <button className='btn update'>Update</button>
              <button className='btn cancel'>Cancel</button>
            </>
          )}
        </div>
      </form>

      <h1>My Posts</h1>
      {myPosts.length > 0 ? (
        <ul className='posts'>
          {myPosts.map((post) => (
            <li key={post._id}>
              <small>Add Date: {post.date}</small>
              <p>{post.body}</p>
              <div className='controls'>
                <button className='btn update'>Update</button>
                <button className='btn delete'>Delete</button>
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
});

export default connect(mapStateToProps, null)(Timeline);
