import React from "react";

const Profile = () => {
  const user = {
    name: "AZ",
    email: "techaz@gmail.com",
    date: "23-09-22",
  };

  const { name, email, date } = user;

  return (
    <div className='profile'>
      <h1>Profile</h1>
      <ul>
        <li>
          <span>Name:</span>
          <span>{name}</span>
        </li>
        <li>
          <span>Email:</span>
          <span>{email}</span>
        </li>
        <li>
          <span>Date:</span>
          <span>{date}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
