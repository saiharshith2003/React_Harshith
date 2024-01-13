import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    console.log("Changing")
    return (
        <div className="head">
            <img className="logo" src={LOGO_URL}></img>
            <div className="list-items">
                <ul >
                    <li>OnlineStatus: {
                        onlineStatus ? "✅" : "🔴"
                    }
                    </li>
                    <li > <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                    <li className="nav-bar-routes"> <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
                    <li className="nav-bar-routes"><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="btn" onClick={() => {
                        btnName === "Login"
                            ? setBtnName("Logout")
                            : setBtnName("Login")
                    }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;