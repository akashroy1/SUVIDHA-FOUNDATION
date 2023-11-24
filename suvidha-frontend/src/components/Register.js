import React, { useRef } from 'react';
import '../css/register.css';

function Register() {
    const iid = useRef();
    const email = useRef();
    const name = useRef();
    const phone = useRef();
    const dob = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    
    return (
        <div className="login-form-container">
        <h2>Login</h2>
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
            <label>Name:</label>
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
            Login
            </button>
        </form>
        </div>
    )
}

export default Register