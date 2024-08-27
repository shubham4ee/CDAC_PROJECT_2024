import { Link } from "react-router-dom";
import '../css/gymlist.css';
import '../css/searchBar.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gym1 from "../images/gym1.jpg";
import gym2 from "../images/gym2.jpg";
import gym3 from "../images/gym3.jpg";

import gym5 from "../images/gym5.jpg"
import gym6 from "../images/gym6.jpg"
import gym7 from "../images/gym7.jpg"
import gym8 from "../images/gym8.jpg"
import gym9 from "../images/gym9.jpg"
import gym10 from "../images/gym10.jpg"
import gym11 from "../images/gym11.jpg"

const gymImages = [
    gym1,
    gym2,
    gym3,
    gym5,
    gym6,
    gym7,
    gym8,
    gym9,
    gym10,
    gym11,


];

const Gymlist = () => {

    const [city, setCity] = useState('');
    const [rating, setRating] = useState('');
    const [membership, setMembership] = useState('');


    const [gymList, setGymList] = useState([]);

    //code for redirect to gym page based on click 
    const navigate = useNavigate();

    const GymRedirect = (gym_id) => {
        console.log("Redirecting with gym_id:", gym_id);
        navigate('/gymDetails', { state: { id_value: gym_id } });
    };

    // Retrieve gym list from local storage when component mounts
    useEffect(() => {
        const storedGymList = localStorage.getItem('gymList');
        if (storedGymList) {
            setGymList(JSON.parse(storedGymList));
        }
    }, []);

    // Update local storage whenever gymList changes
    useEffect(() => {
        if (gymList.length > 0) {
            localStorage.setItem('gymList', JSON.stringify(gymList));
        }
    }, [gymList]);



    const SearchGymList = async () => {
        try {

            // const gymcity = city;
            // const gymrating = 5;
            // const

            // retriving parameters by all the city , rating , membership
            // const response = await axios.post('http://localhost:8080/searchAllGyms', null, {
            //     params: {
            //         gym_City: city,
            //         gym_Rating: rating,
            //         gym_Membership: membership,
            //     },
            // });

            // retriving by city
            const response = await axios.post('http://localhost:8080/searchGymsbyCity', null, {
                params: {
                    gym_City: city,
                },
            });

            // // retriving by rating
            // const response = await axios.post('http://localhost:8080/searchGymsbyRating', null, {
            //     params: {
            //         gym_Rating: rating,
            //     },
            // });

            console.log("Search success:", response.data);
            setGymList(response.data);
            window.alert("Search successful!");
        } catch (error) {
            console.error("Error occurred during search:", error);
            window.alert("Search failed: " + error.message);
        }
    };






    return (
        <div className=".">

            <div className="searchBar-Container">
                <div className="input-group">
                    <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="searchSelect"
                    >
                        <option value={null}>Select City</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="pune">Pune</option>
                        <option value="dadar">Dadar</option>
                        <option value="thane">Thane</option>
                        <option value="CSMT">CSMT</option>
                        <option value="nashik">Nashik</option>
                    </select>

                    <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="searchSelect"
                    >
                        <option value={null}>Select Rating</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                    </select>

                    <select
                        value={membership}
                        onChange={(e) => setMembership(e.target.value)}
                        className="searchSelect"
                    >
                        <option value="">Select Membership</option>
                        <option value="platinum">Platinum</option>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                    </select>

                    <button onClick={SearchGymList} className="searchButton">Search</button>
                </div>
            </div>




            <div className="grid-container">
                {/* adding dynamic html */}
                {/* <div className="tile">

                    <div class="tile-container">
                        <div class="image"><Link to={"/"}>
                            <img className="Link-img" src={gym10} alt="Gym 1" />
                        </Link></div>
                        <div class="title">Fiteness Center</div>
                        <div class="rating">
                            <div class="score">4.5</div>
                            <div class="reviews">500 reviews</div>
                        </div>
                        <div class="location">CST, Mumbai</div>
                        <div class="offer">limited time offer</div>
                    </div>

                </div> */}
                {gymList.map((post) => {
                    const { gym_id, gym_name, gymcity, gym_rating, gym_review,
                        gym_offer } = post;
                    const imageSrc = gymImages[(gym_id - 1) % 10];
                    return (
                        <div class="tile-container" key={gym_id}>
                            <div class="image">
                                <Link to={`/gymDetails/${gym_id}`} >
                                    <img className="Link-img" src={gymImages[(gym_id - 1) % 10]} alt="Gym 1" />
                                </Link></div>
                            <div class="title">{gym_name.slice(0, 15)}</div>
                            <div class="rating">
                                <div class="score">{gym_rating}</div>
                                <div class="reviews">{gym_review} reviews</div>
                            </div>
                            <div class="location">{gymcity}</div>
                            <div class="offer">{gym_offer}</div>
                        </div>
                    )

                })}




            </div>
        </div>
    );
}

export default Gymlist;
