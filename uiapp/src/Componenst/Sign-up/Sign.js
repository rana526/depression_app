import "./Sign.css"
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sign() {
const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    birthdate: "",
    name: "",
    phone: "",
    gender: "",
    Status : "",
    country:"",
});

const [verificationCode, setVerificationCode] = useState("");

const navigate = useNavigate();

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
    ...prevState,
    [name]: value,
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();

    const code = "1234"; 

    setVerificationCode(code);
    navigate("/verify-code");
};
const handleLog = (event) => {
    event.preventDefault();

    navigate("/login");
};


return (
    <div className="si-container">

        <form onSubmit={handleSubmit}>

            <div className="content">
                <label htmlFor="username">Username:</label>
                <input
                type="text"
                id="username"
                name="username"
                required
                value={formData.username}
                onChange={handleInputChange}
                /><br /><br />
            </div>

            <div className="content">
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                /><br /><br />
            </div>


            <div className="content">
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                /><br /><br />
            </div>

            <div className="content">
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                /><br /><br />
            </div>

            <div className="content">
                <label htmlFor="birthdate">Birth Date:</label>
                <input
                type="date"
                id="birthdate"
                required
                name="birthdate"
                value={formData.birthdate}
                onChange={handleInputChange}
                /><br /><br />
            </div>

            <div className="content">
                <label htmlFor="country">country:</label>
                <input
                type="text"
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleInputChange}
                /><br /><br />
            </div>


            <div className="content">
                <label htmlFor="phone">Phone:</label>
                <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                /><br /><br />
            </div>

            <div className="content">
                <label htmlFor="gender">Gender:</label>
                <select
                id="gender"
                name="gender"
                required
                value={formData.gender}
                onChange={handleInputChange}
                >
                <option value="">--Please choose an option--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select><br /><br />
            </div>

            <div className="content">
                <label htmlFor="Status">Status: </label>
                <select
                id="Status"
                name="Status"
                required
                value={formData.Status}
                onChange={handleInputChange}
                >
                <option value="">--Please choose an option--</option>
                <option value="single">single</option>
                <option value="married">married</option>
                </select><br /><br />

            </div>


            <input type="submit" value="Submit" /> 
            <button onClick={handleLog} >
                Login
            </button>

        </form>
    </div>
);
}

export default Sign
