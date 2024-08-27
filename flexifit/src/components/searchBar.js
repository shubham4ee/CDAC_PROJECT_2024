import React, { useState } from 'react';
import '../css/searchBar.css'
import axios from 'axios';
const SearchBar = ({ onSearch }) => {








    // return (
    // <div className="searchBar-Container">

    //     <div style={{ marginBottom: '10px' }}>
    //         <select
    //             value={city}
    //             onChange={(e) => setCity(e.target.value)}
    //             style={{ padding: '8px', width: '200px' }}
    //         >
    //             <option value={null}>Select City</option>
    //             <option value="Mumbai">Mumbai</option>
    //             <option value="Pune">Pune</option>
    //             <option value="Dadar">Dadar</option>
    //             <option value="Thane">Thane</option>


    //         </select>


    //         <select
    //             value={rating}
    //             onChange={(e) => setRating(e.target.value)}
    //             style={{ padding: '8px', width: '200px' }}
    //         >
    //             <option value={null}>Select Rating</option>
    //             <option value={3}>3</option>
    //             <option value={4}>4</option>
    //             <option value={5}>5</option>


    //         </select>
    //         <select
    //             value={membership}
    //             onChange={(e) => setMembership(e.target.value)}
    //             style={{ padding: '8px', width: '200px' }}
    //         >
    //             <option value="">Select Membership</option>
    //             <option value="platinum">Platinum</option>
    //             <option value="gold">Gold</option>
    //             <option value="silver">Silver</option>
    //         </select>
    //     </div>
    //     <button onClick={SearchGymList} style={{ padding: '10px 20px' }}>Search</button>
    // </div>
    // );
};

export default SearchBar;




