import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css'



function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const navigate = useNavigate();

const signup = (event) => {
    event.preventDefault();

    navigate("/");
};

const handleSubmit = async (event) => {
    event.preventDefault();


    const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
        'Content-Type': 'application/json',
    },
     });

    if (!response.ok) {
    setError('Invalid email or password');
    return;
    }

    window.location.replace('/home');

    navigate("/login");

};
const handleLog = (event) => {
    event.preventDefault();

    navigate("/home");
};




return (
    <div className='L-container'>

    <form onSubmit={handleSubmit}>
    <input
        required
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
    />
    <input
        required
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
    />
    {/* <button type="submit"  onClick={handleLog}>Login</button> */}
    <input type="submit" value="Login"/> 
    {error && <p>{error}</p>}

    <button onClick={signup} > Sign Up </button>
    </form>

    </div>
);
}

export default Login 