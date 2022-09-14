import React from "react";

const Login = () => {
  return (
    <div className='auth-container'>
      <form action=''>
        <h2>Login User</h2>
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
        <input type='submit' value='Login' />
        <p>Haven't registered yet? Register yourself</p>
      </form>
    </div>
  );
};

export default Login;
