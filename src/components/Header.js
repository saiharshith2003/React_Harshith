import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between m-2 shadow-md">
            <img className="w-38 h-28 mt-4 mx-4" src={LOGO_URL}></img>
            <div className="flex items-center">
                <ul className="flex gap-4 list-none px-8 py-14" >
                    <li className="font-bold">OnlineStatus: {
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