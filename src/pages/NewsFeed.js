import React from "react";

const NewsFeed = () => {
  const myId = "1";

  const allPosts = [
    {
      _id: "0",
      user: "0",
      body: "Lorem ipsum dolor sit amet consectetur,  recusandae quo hic fuga necessitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "1",
      user: "0",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis voluptatibus recusandae quo hic fuga necessitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "2",
      user: "1",
      body: "Lorem ipsum dolor sitssitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "3",
      user: "0",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis voluptatibus recusandae quo hic fuga necessitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "4",
      user: "1",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      date: "25-9-22",
    },
    {
      _id: "0",
      user: "0",
      body: "Lorem ipsum dolor sit amet consectetur,  recusandae quo hic fuga necessitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "1",
      user: "0",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis voluptatibus recusandae quo hic fuga necessitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "2",
      user: "1",
      body: "Lorem ipsum dolor sitssitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "3",
      user: "0",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis voluptatibus recusandae quo hic fuga necessitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "4",
      user: "1",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      date: "25-9-22",
    },
    {
      _id: "0",
      user: "0",
      body: "Lorem ipsum dolor sit amet consectetur,  recusandae quo hic fuga necessitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "1",
      user: "0",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis voluptatibus recusandae quo hic fuga necessitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "2",
      user: "1",
      body: "Lorem ipsum dolor sitssitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "3",
      user: "0",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis voluptatibus recusandae quo hic fuga necessitatibus autem, exercitationem quasi dicta quisquam.",
      date: "25-9-22",
    },
    {
      _id: "4",
      user: "1",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      date: "25-9-22",
    },
  ];

  return (
    <div className='newsfeed'>
      <h1>NewsFeed</h1>
      {allPosts.length > 0 ? (
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

export default NewsFeed;
