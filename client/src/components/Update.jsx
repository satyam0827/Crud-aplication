import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
const Update = () => {

  const { id } = useParams(); // Access the route parameter
  const navigate = useNavigate(); 
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/update/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
       
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/update/${id}`, user);
      // Optionally, redirect or update UI as needed after successful update
      alert("updated successfully!");
      navigate('/');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className='input--div'>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input--div'>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input--div'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit"  id='submit-btn' className='btn'>Update</button>
      </form>
    </div>
  );
};

export default Update;





















// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';


// const Update = () => {

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("")
//   const navigate = useNavigate()


//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === "firstName") {
//       setFirstName(value);
//     } else if (name === "lastName") {
//       setLastName(value);
//     } else if (name === "email") {
//       setEmail(value);
//     }

//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const data = {
//       firstName,
//       lastName,
//       email
//     };

//     try {
//       const response = await axios.put('http://localhost:8000/api/users', data);
//       console.log('Success:', response.data);
//       alert("Your data have been saved successfully!")

//       setFirstName("");
//       setLastName("");
//       setEmail("")

//       navigate("/")

//     } catch (error) {
//       console.error('Error after submission:', error);
//     }
//   };


//   return (
//     <div id="container">

//       <form onClick={handleSubmit}>

//         <h2>Update the Data</h2>

//         <div className='input--div'>
//           <label htmlFor="firstName" className='label'>First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={firstName}
//             onChange={handleChange} required />
//         </div>

//         <div className='input--div' >
//           <label htmlFor="lastName" className='label'>Last Name:</label>

//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={lastName}
//             onChange={handleChange}
//             required />
//         </div>

//         <div className='input--div'>
//           <label htmlFor="email" className='label'>Email:</label>

//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             required />
//         </div>

//         <button type="submit" id='submit-btn' className='btn'>Update</button>

//       </form>

//     </div>
//   )
// }
