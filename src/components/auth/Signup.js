import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  //====================================================================================================================================================
  // state for the input is the object with the input field name inside the object
  //====================================================================================================================================================
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  //====================================================================================================================================================
  // functon to handle onChange in the inputfield
  // The logic here is set the user to have the previous user data with the spread operator, and get the name from the state that is changed and set the targeted value to it all the way
  //====================================================================================================================================================
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  //====================================================================================================================================================
  // functon to handle onsubmit of the form
  // set the input values to the empty string
  // submit the form and hit the api using the action triggered in the redux
  // apply validations as well
  //====================================================================================================================================================
  const onSubmit = async (e) => {
    e.preventDefault();

    // destructure the user state to apply validations
    const { name, email, password, password2 } = user;

    // Validation if any field is empty so return with the error
    // Validation that both passwords must have to match
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      password2.trim() === ""
    ) {
      alert("Some Credentials are Missing in the Input! 👈");
    }

    if (password !== password2) {
      alert("Passwords are not Matching");
    }

    // set user to empty string again
    setUser({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
  };

  return (
    <div className='auth-container'>
      <form onSubmit={onSubmit}>
        <h2>Register User</h2>
        <div className='form-controls'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter Name'
            value={user.name}
            onChange={onChange}
          />
        </div>
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
        <div className='form-controls'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            id='password2'
            placeholder='Confirm Password'
            value={user.password2}
            onChange={onChange}
          />
        </div>
        <input type='submit' value='SignUp' />
        <p>
          Already have an Account?<NavLink to='/login'>Goto Login</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Signup;
