import { Link } from 'react-router-dom'
import '../css/login.css'
import add1 from '../images/bannerAdd.jpg'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/login', { username, password });
            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data));
                // console.log(localStorage);
                navigate('/dashboard');

            }
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    return (

        <div class="loginBody">
            <div class="login-container">
                <div class="image-section">
                    <img className="Link-img" src={add1} alt="Gym 1" />
                </div>
                <div class="login-section">
                    <h1>Sign In</h1>
                    <div class="form-group">
                        <label for="email">User Name / Email</label>
                        <input type="text" id="email" placeholder="Enter your Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button class="login-button" onClick={handleLogin}>Login Button</button>
                    <br />
                    {/* <hr /> */}
                    <div class="form-group">
                        <text >Dont have Account ! </text>
                        <Link to='/signup' >
                            <button class="create-account-button"> Create Account</button>
                        </Link>
                        {/* <NavLink to='/'><button class="create-account-button"> Create Account</button></NavLink> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn