import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // onChange of field
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // onSubmit
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const { email, password } = user;

    // Validation if empty
    if (!email || !password) {
      alert("Enter Both Input Fields");
    }

    // Again setting the values to empty
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className='auth-container'>
      <form onSubmit={onSubmit}>
        <h2>Login User</h2>
        <div className='form-controls'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Email'
            value={user.email}
            onChange={onChange}
          />
        </div>
        <div className='form-controls'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password'
            value={user.password}
            onChange={onChange}
          />
        </div>
        <input type='submit' value='Login' />
        <p>
          Haven't registered yet? <NavLink to="/signup">Register yourself</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
