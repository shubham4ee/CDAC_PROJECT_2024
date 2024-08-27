import React, { useState } from 'react';
import '../css/dashboard.css';
import axios from 'axios';


const Dashboard = () => {

    // const axios = require('axios');

    const [memData, SetMemData] = useState([]);
    const [userId, setUserId] = useState(1);

    async function getMembershipByUserid() {

        const userDataString = localStorage.getItem('user');
        const userData = JSON.parse(userDataString);
        setUserId(userData.userid);



        const response = await axios.post('http://localhost:8080/getMembershipByUserid', null, {
            params: {
                userid: userId
            }
        })
            .then(response => {
                // console.log('Response:', response.data);
                SetMemData(response.data);
                console.log('Response:', memData);
            })
            .catch(error => {
                console.error('Error:', error);
            });



    }


    const membershipData = [
        {
            membershipId: '001',
            membershipName: 'Gold Membership',
            payorName: 'John Doe',
            payorPhone: '123-456-7890',
            purchaseDate: '2024-01-15',
            startDate: '2024-02-01',
            endDate: '2025-01-31',
        },
        {
            membershipId: '002',
            membershipName: 'Silver Membership',
            payorName: 'Jane Smith',
            payorPhone: '987-654-3210',
            purchaseDate: '2024-03-10',
            startDate: '2024-04-01',
            endDate: '2025-03-31',
        },
        // Add more membership records as needed
    ];

    return (
        <div className="container">
            <h2>Active Memberships & History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Membership ID</th>
                        <th>Membership Name</th>
                        <th>Payor Name</th>
                        <th>Payor Phone No</th>
                        <th>Purchase Date</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {memData.map((membership, index) => (
                        <tr key={index}>
                            <td>{membership.membershipId}</td>
                            <td>{membership.membershipName}</td>
                            <td>{membership.payorName}</td>
                            <td>{membership.payorPhoneNo}</td>
                            <td>{membership.purchaseDate}</td>
                            <td>{membership.startDate}</td>
                            <td>{membership.endDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={getMembershipByUserid} >Clickme</button>
        </div>
    );
};

export default Dashboard;
