import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  if (!user || user === undefined) {
    // return <Navigate to="/login" />;
    navigate('/login');
    return null;
  }

  const { name, iid, email, phone, dob } = user;
  // const fdob= `${dob.getDate()}-${dob.getMonth() + 1}-${dob.getFullYear()}`
  // console.log(user);
  const fdob = new Date(dob).toLocaleDateString();

  const handleLogout = () => {
    localStorage.removeItem("user");
    // return <Navigate to="/login" />;
    navigate('/login');
    };

  return (
    <div className="profile-container">
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h1>Profile</h1>
      <div className="profile-info">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>ID:</strong> {iid}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>DOB:</strong> {fdob}
        </p>
      </div>
      <div>
        <a href="/intern">Generate Offer Letter</a>
      </div>
    </div>
  );
}

export default Profile;
