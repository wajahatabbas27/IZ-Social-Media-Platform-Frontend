import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logIn } from "../../actions/userDataActions";

const Login = ({ auth, logIn }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [auth]);

  // onChange of field
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // onSubmit
  const onSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    // Validation if empty
    if (email.trim() === "" || password.trim() === "") {
      alert("Email and password both are required!");
    }

    // calling the action
    await logIn({
      email,
      password,
    });

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
          Haven't registered yet?{" "}
          <NavLink to='/signup'>Register yourself</NavLink>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps, { logIn })(Login);
