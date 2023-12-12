import { useState, useEffect } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    console.log("body rendered"); 

    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render(just once)
    // if dependecy array is [btnName] => called everytime btnName is updated 

    useEffect(()=>{
        console.log("useEffect called");

    }, [btnName])
    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About us</Link></li>
                    <li>
                       <Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{btnName === "Login" ?setbtnName("Logout") : setbtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    ) 
};

export default Header;