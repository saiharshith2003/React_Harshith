import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResMenu from "./components/ResMenu";
import UserContext from "./utils/UserContext";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";

const App = () => {

    const [userName, setUserName] = useState();


    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ User: userName, setUserName, userName }}>
                <div>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const routerConfig = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [{
        path: "/",
        element: <Body />
    }, {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />,
    }, {
        path: "/restraunts/:resId",
        element: <ResMenu />
    }, {
        path: "/cart",
        element: <Cart />
    }, {
        path: "/login",
        element: <Login />
    }],
    errorElement: <Error />,
},

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routerConfig} />)