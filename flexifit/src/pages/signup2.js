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
        if (formData.password != retypePassword) {
            return;
        }
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/add', formData);


        } catch (error) {
            console.error('Error posting data:', error);

        }

    };

    return (

        <div class="signupBody">
            <div class="signup-container">
                <div class="image-section">
                    Image
                </div>
                <form onSubmit={formSubmit} >
                    <div class="signup-section">
                        <h1>Sign Up</h1>
                        <div class="form-group">
                            <label for="email">User Name</label>
                            <input type="text" id="username" placeholder="Enter your name" value={formData.username} onChange={whenInputChange} />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" value={formData.password} onChange={whenInputChange} />
                        </div>
                        <div class="form-group">
                            <label for="password">Retype Password</label>
                            <input type="password" id="retypePassword" placeholder="Re-Type your password" value={retypePassword} onChange={whenRetypeChange} />
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={whenInputChange} />
                        </div>

                        <button class="signup-button" type="submit">SighUp Button</button>
                        <br />


                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup
