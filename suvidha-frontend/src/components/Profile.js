import React from 'react';
import { Navigate } from "react-router-dom"
import '../css/profile.css';

function Profile() {

    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || user === undefined) {
        <Navigate to='/login'/>
    }

    const {name, iid, email, phone, dob} = user;
    // const fdob= `${dob.getDate()}-${dob.getMonth() + 1}-${dob.getFullYear()}`
    // console.log(user);
    const fdob = new Date(dob).toLocaleDateString();

    return (
        <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile-info">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>ID:</strong> {iid}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>DOB:</strong> {fdob}</p>
        </div>
        <div>
            <a href="/intern">Apply for Offer Letter</a>
        </div>
        </div>
    )
}

export default Profile