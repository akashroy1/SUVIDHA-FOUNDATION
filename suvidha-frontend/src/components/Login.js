import React, { useRef, useContext } from 'react';
import axios from 'axios';
import '../css/login.css';
import { AuthContext } from "../contexts/AuthContext"; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const email = useRef();
  const password = useRef();

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:5000/api/login`,
        {
          email: email.current.value,
          password: password.current.value,
        }
      )
      .then((response) => {
        if (response.data.status === "Success") {
          console.log(response.data.user);
          setUser(response.data.user);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Login Error: ' + error);
        console.log(error);
      });
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            ref={email}
            placeholder='example@email.com'
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            ref={password}
            placeholder='Password'
            required
          />
        </div>
        <button type="submit" >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
