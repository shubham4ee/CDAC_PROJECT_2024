// import { Link } from 'react-router-dom'
// import '../css/login.css'

// const Login = () => {
//     const handleButtonClick = () => {
//         window.location.href = '/signup';
//     };
//     return (

//         <div class="loginBody">
//             <div class="login-container">
//                 <div class="image-section">
//                     Image
//                 </div>
//                 <div class="login-section">
//                     <h1>Sign In</h1>
//                     <div class="form-group">
//                         <label for="email">User Name / Email</label>
//                         <input type="text" id="email" placeholder="Enter your email" />
//                     </div>
//                     <div class="form-group">
//                         <label for="password">Password</label>
//                         <input type="password" id="password" placeholder="Enter your password" />
//                     </div>
//                     <button class="login-button">Login Button</button>
//                     <br />
//                     {/* <hr /> */}
//                     <div class="form-group">
//                         <text >Dont have Account ! </text>
//                         <Link to='/signup' >
//                             <button class="create-account-button"> Create Account</button>
//                         </Link>
//                         {/* <NavLink to='/'><button class="create-account-button"> Create Account</button></NavLink> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Login


// 






import "../css/signup.css"
import React, { useState } from "react";
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        retypePassword: '',
        email: ''
    });

    const [retypePassword, setRetypePassWord] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Username validation
        if (!formData.username) {
            formErrors.username = "Username is required.";
        } else if (!usernameRegex.test(formData.username)) {
            formErrors.username = "Username must be 3-15 characters long and can only contain letters, numbers, and underscores.";
        }

        // Password validation
        if (!formData.password) {
            formErrors.password = "Password is required.";
        } else if (!passwordRegex.test(formData.password)) {
            formErrors.password = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        }

        // Retype password validation
        if (!retypePassword) {
            formErrors.retypePassword = "Please retype your password.";
        } else if (formData.password !== retypePassword) {
            formErrors.retypePassword = "Passwords do not match.";
        }

        // Email validation
        if (!formData.email) {
            formErrors.email = "Email is required.";
        } else if (!emailRegex.test(formData.email)) {
            formErrors.email = "Please enter a valid email address.";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const whenInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const whenRetypeChange = (e) => {
        const { value } = e.target;
        setRetypePassWord(value);
    };

    const formSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:8080/add', formData);
                clearFields();

                // Handle successful submission
            } catch (error) {
                console.error('Error posting data:', error);
            }
        }
    };
    const clearFields = () => {
        // Clear the input fields by setting their values to empty strings
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('retypePassword').value = '';
        document.getElementById('email').value = '';
        formData.email = '';
        formData.password = '';
        formData.retypePassword = '';
        formData.username = '';
        window.alert("Login Successfull...");
    };



    return (
        <div className="signupBody">
            <div className="signup-container">
                <form onSubmit={formSubmit}>
                    <div className="signup-section">
                        <h1>Sign Up</h1>
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your name"
                                value={formData.username}
                                onChange={whenInputChange}
                            />
                            {errors.username && <p className="error">{errors.username}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={whenInputChange}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="retypePassword">Retype Password</label>
                            <input
                                type="password"
                                id="retypePassword"
                                placeholder="Re-Type your password"
                                value={retypePassword}
                                onChange={whenRetypeChange}
                            />
                            {errors.retypePassword && <p className="error">{errors.retypePassword}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={whenInputChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <br></br>
                        <button className="signup-button" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
