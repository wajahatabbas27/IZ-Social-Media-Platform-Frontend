import React from "react";

const Signup = () => {
  return (
    <div className='auth-container'>
      <form action=''>
        <h2>Register User</h2>
        <div className='form-controls'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' placeholder='Enter Name' />
        </div>
        <div className='form-controls'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Email'
          />
        </div>
        <div className='form-controls'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password'
          />
        </div>
        <div className='form-controls'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            id='password2'
            placeholder='Confirm Password'
          />
        </div>
        <input type='submit' value='SignUp' />
        <p>Already have an Account? Goto Login</p>
      </form>
    </div>
  );
};

export default Signup;
