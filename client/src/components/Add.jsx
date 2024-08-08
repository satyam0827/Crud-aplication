import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Add = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    }

  };

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const data = {
      firstName,
      lastName,
      email
    };

    try {
      const response = await axios.post('http://localhost:8000/api/users', data);
      console.log('Success:', response.data);
      alert("Your data have been saved successfully!")
      setFirstName("");
      setLastName("");
      setEmail("")
      navigate("/")
    } catch (error) {
      console.error('Error after submission:', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Enter the Data</h2>
        <div className='input--div'>
          <label htmlFor="firstName" className='label'>First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange} required/>
        </div>
        <div className='input--div' >
          <label htmlFor="lastName" className='label'>Last Name:</label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required/>
        </div>
        <div className='input--div'>
          <label htmlFor="email" className='label'>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required/>
        </div>
        <button type="submit" id='submit-btn' className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Add;