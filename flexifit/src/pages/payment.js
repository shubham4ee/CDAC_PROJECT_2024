import React, { useState, useEffect } from 'react';
import '../css/payment.css';
import axios from 'axios';

const Payment = () => {
    const [userId, setUserId] = useState(0);
    const [formData, setFormData] = useState({
        endDate: '',
        membershipName: '',
        payorName: '',
        payorPhoneNo: '',
        purchaseDate: '',
        startDate: '',
        userid: { userid: userId }
    });

    useEffect(() => {
        const userDataString = localStorage.getItem('user');
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            setUserId(userData.userid);
            setFormData((prevFormData) => ({
                ...prevFormData,
                userid: { userid: userData.userid }
            }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/addmembership', formData);
            console.log('Payment Details:', formData);
            alert('Payment details submitted successfully.');
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <div className="payment-details-container">
            <h2>Enter Payment Details</h2>
            <form onSubmit={handleSubmit}>
                <select
                    name="membershipName"
                    value={formData.membershipName}
                    onChange={handleChange}
                    className="searchSelect"
                    required
                >
                    <option value="">Select Membership</option>
                    <option value="platinum">Platinum</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                </select>
                <div className="form-group">
                    <label htmlFor="payorName">Enter Your Name:</label>
                    <input
                        type="text"
                        id="payorName"
                        name="payorName"
                        value={formData.payorName}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Uncomment if email is needed */}
                {/* <div className="form-group">
                    <label htmlFor="email">Enter Your Email ID:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div> */}
                <div className="form-group">
                    <label htmlFor="payorPhoneNo">Enter Your Mobile Number:</label>
                    <input
                        type="tel"
                        id="payorPhoneNo"
                        name="payorPhoneNo"
                        value={formData.payorPhoneNo}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="purchaseDate">Purchase Date:</label>
                    <input
                        type="date"
                        id="purchaseDate"
                        name="purchaseDate"
                        value={formData.purchaseDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <button type="submit" className="submit-button">Proceed To Pay</button>
            </form>
        </div>
    );
};

export default Payment;
