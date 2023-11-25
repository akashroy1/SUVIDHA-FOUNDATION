import React, { useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import '../css/register.css';

function Register() {
    const iid = useRef();
    const email = useRef();
    const name = useRef();
    const phone = useRef();
    const dob = useRef();
    const password = useRef();
    const confirmPassword = useRef();

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios
        .post(
            `http://localhost:5000/api/new-intern`,
            {
                iid: iid.current.value,    
                email: email.current.value,
                name: name.current.value,
                phone: phone.current.value,
                dob: dob.current.value,
                password: password.current.value,
            }
        )
        .then((response) => {
            if (response.data.status === "Success") {
            // console.log(response.data.insertedIntern);
            localStorage.setItem('user', JSON.stringify(response.data.insertedIntern));
            navigate('/');
            }
        })
        .catch((error) => {
            console.error('Login Error: ' + error);
            console.log(error);
        });
    }

    const loginClick = ()=>{
        navigate('/login');
        return null;
    }
    
    return (
        <div className="login-form-container">
        <div className="navbar">
            <button

                onClick={loginClick}
            >
                Login
            </button>
        </div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Company ID:</label>
            <input
                type="text"
                id="iid"
                ref={iid}
                placeholder='Company ID'
                required
            />
            </div>
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
            <label>Name:</label>
            <input
                type="text"
                id="name"
                ref={name}
                placeholder='Name'
                required
            />
            </div>
            <div className="form-group">
            <label>Phone:</label>
            <input
                type="text"
                id="phone"
                ref={phone}
                placeholder='Phone'
                required
            />
            </div>
            <div className="form-group">
            <label>DOB:</label>
            <input
                type="date"
                id="dob"
                ref={dob}
                placeholder='Date of Birth'
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
            <div className="form-group">
            <label> Confirm Password:</label>
            <input
                type="password"
                id="confirmPassword"
                ref={confirmPassword}
                placeholder='Confirm Password'
                required
            />
            </div>
            <button type="submit" >
                Register
            </button>
        </form>
        </div>
    )
}

export default Register