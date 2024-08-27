// import "../css/membership.css"
// const Membership = () => {
//     return (
//         <div>
//             {/* <h2>Home Page</h2> */}
//             {/* membership plan displaying table */}
//             <tabel className="memTable">
//                 <tr className="memTable_row_title">
//                     <th><h3>Silver</h3></th>
//                     <th><h3>Gold</h3></th>
//                     <th><h3>Platinum</h3></th>

//                 </tr>
//                 {/* heading images */}
//                 <tr className="memTable_row_img">
//                     <td><img></img></td>
//                     <td><img></img></td>
//                     <td><img></img></td>

//                 </tr>
//                 {/* features */}
//                 <tr className="memTable_row_features">
//                     <td>
//                         <table>
//                             <tr>
//                                 feature 1
//                             </tr>
//                             <tr>
//                                 feature 2
//                             </tr>
//                             <tr>
//                                 feature 3
//                             </tr>
//                         </table>
//                     </td>
//                     <td>
//                         <table>
//                             <tr>
//                                 feature 1
//                             </tr>
//                             <tr>
//                                 feature 2
//                             </tr>
//                             <tr>
//                                 feature 3
//                             </tr>
//                             <tr>
//                                 feature 1
//                             </tr>
//                             <tr>
//                                 feature 2
//                             </tr>
//                             <tr>
//                                 feature 3
//                             </tr>
//                         </table>
//                     </td>
//                     <td>
//                         <table>
//                             <tr>
//                                 feature 1
//                             </tr>
//                             <tr>
//                                 feature 2
//                             </tr>
//                             <tr>
//                                 feature 3
//                             </tr>
//                             <tr>
//                                 feature 4
//                             </tr>
//                             <tr>
//                                 feature 5
//                             </tr>
//                             <tr>
//                                 feature 6
//                             </tr>
//                             <tr>
//                                 feature 7
//                             </tr>
//                             <tr>
//                                 feature 8
//                             </tr>
//                             <tr>
//                                 feature 9
//                             </tr>
//                         </table>
//                     </td>

//                 </tr>
//                 {/*  */}
//                 {/* <tr className="memTable_row">
//                     <td></td>
//                     <td></td>
//                     <td></td>

//                 </tr> */}
//             </tabel>

//         </div>
//     )
// }
// export default Membership


import "../css/membership.css";
import { Link } from "react-router-dom";
import gym1 from "../images/gym1.jpg";

const Membership = () => {
    return (
        <div className="membership-container">
            <div className="tile-container">
                <div className="image">
                    <Link to={"/"}>
                        <img className="Link-img" src={gym1} alt="Gym 1" />
                    </Link>
                </div>
                <div className="title">Original</div>
                <div className="location">Rs: 15000/ For 10 Days</div>
            </div>

            <div className="tile-container">
                <div className="image">
                    <Link to={"/"}>
                        <img className="Link-img" src={gym1} alt="Gym 1" />
                    </Link>
                </div>
                <div className="title">Platinum</div>
                <div className="location">Rs: 25000/ For Month </div>
            </div>

            <div className="tile-container">
                <div className="image">
                    <Link to={"/"}>
                        <img className="Link-img" src={gym1} alt="Gym 1" />
                    </Link>
                </div>
                <div className="title">Gold</div>
                <div className="location">Rs: 22000/ For Month</div>
            </div>

            <div className="tile-container">
                <div className="image">
                    <Link to={"/"}>
                        <img className="Link-img" src={gym1} alt="Gym 1" />
                    </Link>
                </div>
                <div className="title">Silver</div>
                <div className="location">Rs: 20000/ For Month</div>
            </div>
        </div>
    );
}

export default Membership;
