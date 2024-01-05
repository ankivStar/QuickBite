import { useState, useEffect, useContext} from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    useEffect(()=>{
    }, [btnName])

    // subscribing to the store using a selector
    const cartItems = useSelector((store)=>store.cart.items); 
    console.log(cartItems);
    
    return (
        <div className="sticky top-0 left-0 right-0 z-50 bg-green-300 shadow-lg sm:bg-yellow-200 lg:bg-green-200">
            <div className="flex items-center justify-between bg-pink-100 shadow-lg"> 
                <div className="logo-container w-[144px]"> 
                    <img className="w-[144px]" src={LOGO_URL}/>
                </div>
                <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                        <li className="px-4">
                            Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                        <li className="px-4">
                            <Link to="/">Home</Link></li>
                        <li className="px-4">
                            <Link to="/about">About us</Link></li>
                        <li className="px-4">
                        <Link to="/contact">Contact us</Link></li>
                        <li className="px-4">
                        <Link to="/grocery">Grocery</Link></li>
                        <li className="px-4">
                        <Link to="/cart">Cart-({cartItems.length} items)</Link></li>
                        <button className="px-4 border border-black" onClick={()=>{btnName === "Login" ?setbtnName("Logout") : setbtnName("Login")}}>{btnName}</button>
                        <li className="px-4">{loggedInUser}</li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
};

export default Header;