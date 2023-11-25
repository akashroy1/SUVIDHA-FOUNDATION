import React, { useState } from 'react';
// import axios from "axios";
import {useNavigate} from 'react-router-dom';

const InternForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    doj: '',
    duration: '',
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () =>{
    navigate('/offerLetter', { state: {formData} })
  };

  return (
    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center'}}>
        <form onSubmit={handleSubmit} style={{width: "40%"}}>
          <label>Date of Joining</label>
          <input
            type="date"
            name="doj"
            value={formData.doj}
            onChange={handleInputChange}
            placeholder="Date of Joining"
          />
          <label> Duration of Internship</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            placeholder="Duration (in month)"
          />\
          <br />
          <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default InternForm;
