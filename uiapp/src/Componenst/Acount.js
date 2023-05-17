import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "./Account.css"

function Acount() {
const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    birthdate: '',
    name: '',
    phone: '',
    gender: '',
    photo: null,
});
const { accountName } = useParams();

const navigate = useNavigate();

useEffect(() => {
    axios.get(`/api/accounts/${accountName}`)
    .then(response => setFormData(response.data))
    .catch(error => console.log(error));
}, [accountName]);



const handleLogOut = (event) => {
    event.preventDefault();
    navigate('/login');
};

const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/api/accounts/${accountName}`, formData)
    .then(response => {
        console.log(response);
        
    })
    .catch(error => console.log(error));
};



return (
    <div className='a-container'>
        <h1>Welcome to your account, {accountName}!</h1>
        <form onSubmit={handleSubmit}>
        
        <label htmlFor="name">Name:</label>
        <p>{formData.name}</p>

        <label htmlFor="username">Username:</label>
        <p>{formData.username}</p>

        <label htmlFor="password">Password:</label>
        <p>{formData.password}</p>

        <label htmlFor="email">Email:</label>
        <p> {formData.email}</p>

        <label htmlFor="birthdate">Birth Date:</label>
        <p>{formData.birthdate}</p>


        <label htmlFor="phone">Phone:</label>
        <p>{formData.phone}</p>

        <label htmlFor="gender">Gender:</label>
        <p>{formData.gender}</p>


        <button className='logout' onClick={handleLogOut} >
            Log Out
        </button>  
    </form>
    </div>
);
}

export default Acount;