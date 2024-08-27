// import { Link, NavLink } from "react-router-dom";
// import '../css/navbar.css'
// const Navbar = () => {

//     var bal = 1000;

//     return (
//         <nav class="navbar">
//             <div>
//                 <div class="logo">
//                     <a href="#">FlexiFit</a>
//                 </div>
//             </div>
//             <ul className="ULLinks">
//                 <li className="links">
//                     <NavLink to='/'>Home</NavLink>
//                     {/* <a href="/about">Home</a> */}
//                 </li>
//                 <li className="links" >
//                     <NavLink to='/about'>About</NavLink>
//                 </li>
//                 <li className="links">
//                     <NavLink to='/contact'>Contact</NavLink>
//                 </li>
//                 <li className="links">
//                     <NavLink to='/login'>login</NavLink>
//                 </li>
//             </ul>
//         </nav>



//     )
// }
// export default Navbar;


import { Link, NavLink } from "react-router-dom";
import '../css/navbar.css';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const isLoggedIn = () => {
        return localStorage.getItem('user') !== null;
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('login');
    };

    var bal = 1000;

    return (
        <nav className="navbar">
            <div>
                <div className="logo">
                    <a href="#">FlexiFit</a>
                </div>
            </div>
            <ul className="ULLinks">

                {/* {isLoggedIn() && <li className="links"><Link to="/dashboard">Dashboard</Link></li>} */}

                {/* {isLoggedIn() ? (
                    <li className="links"><button onClick={handleLogout}>Logout</button></li>
                ) : (
                    <li className="links"><Link to="/login">Login</Link></li>
                )} */}


                <li className="links">
                    <NavLink to='/'>Home</NavLink>
                </li>

                {/* Membership Purchase with Dropdown */}
                {/* <li className="links dropdown">
                    <NavLink to='/transaction'>Membership Purchase</NavLink>
                    <ul className="dropdown-content">
                        <li><NavLink to='/payment'>Payment</NavLink></li>
                        <li><NavLink to='/membership-plan'>Membership Plan</NavLink></li>
                        <li><NavLink to='/membership-history'>Membership History</NavLink></li>
                    </ul>
                </li> */}

                <li className="links">
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li className="links">
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                {isLoggedIn() ? (
                    <li className="links dropdown">
                        <NavLink >User</NavLink>
                        <ul className="dropdown-content">
                            <li><NavLink onClick={handleLogout}>Logout</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            <li><NavLink to="/purchase">Purchase</NavLink></li>
                            <li><NavLink to='/membership-history'>Membership History</NavLink></li>
                        </ul>
                    </li>
                ) : (
                    <li className="links"><Link to="/login">Login</Link></li>
                )}

            </ul>
        </nav>
    );
}

export default Navbar;
