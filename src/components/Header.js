import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dontShowButton } from "../utils/userSlice";
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { showLoginSignupButton, displayName } = useSelector((store) => store.user);


    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(dontShowButton())
            navigate("/login")
        }).catch((error) => {
        });
    }
    const onlineStatus = useOnlineStatus();
    const { User } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
            } else {
                dispatch(removeUser())
            }
        });
    }, []
    )
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
                    <li > <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
                    <li ><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact Us</Link></li>
                    <li >
                        <Link to="/cart">Cart-  ({cartItems.length})</Link>
                    </li>
                    <li>{showLoginSignupButton ? <Link to="/login">SignIn</Link> : <button onClick={handleSignOut}>Sign out</button>}</li>
                    <li className="font-bold">{User}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;