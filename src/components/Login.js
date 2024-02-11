import { useRef, useState, useEffect } from "react";
import { checkValidation } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dontShowButton } from "../utils/userSlice";
const Login = () => {

    const { showLoginSignupButton } = useSelector((store) => store.user);


    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);


    }
    const handleValidation = () => {
        dispatch(dontShowButton())
        const message = checkValidation(email.current.value, password.current.value)
        setErrorMessage(message)
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dsmall%2Blogo&psig=AOvVaw1HatkYervzSzIdTDk8jpBm&ust=1707745708963000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOC8ltW2o4QDFQAAAAAdAAAAABAE"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                        }))
                    }).catch((error) => {

                        setErrorMessage(error.message)
                    });
                    setIsSignInForm(!isSignInForm)
                    navigate("/")
                    alert("Account created succesfully")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessag = error.message;

                    setErrorMessage(errorCode + errorMessag);
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    const user = userCredential.user;
                    console.log(user)
                    navigate("/")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessag = error.message;
                    setErrorMessage(errorCode + errorMessag)
                });
        }

    }
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault() }} className="absolute w-3/12 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-8 rounded-xl shadow-lg bg-opacity-85" style={{ top: '65%' }}>
                <h1 className="text-3xl font-bold py-3  m-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input className="w-full px-4 py-4 m-2 border bg-gray-950 rounded-lg bg-opacity-35" type="text" ref={name} placeholder="Enter full name" />}
                <input className="w-full px-4 py-4 m-2 border bg-gray-950 rounded-lg bg-opacity-35" type="text" ref={email} placeholder="Enter Email" />
                <input className="w-full px-4 py-4 m-2 border bg-gray-950 rounded-lg bg-opacity-35" type="password" ref={password} placeholder="Enter password" />

                <p className="py-1 mx-3 my-1 font-bold text-red-600">{errorMessage}</p>
                <button className="py-3 px-4 m-2 bg-red-600 rounded-lg w-full" onClick={handleValidation}>{isSignInForm ? "Sign in" : "Sign up"}</button>
                <p className="py-2 m-2">{isSignInForm ? "New user? " : "Already a User? "}<span className="text-base font-semibold cursor-pointer" onClick={toggleForm}>{isSignInForm ? "Sign up now" : "Sign in now"}</span></p>
            </form>
        </div>
    )
}

export default Login;