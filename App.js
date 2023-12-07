import React from "react";
import ReactDOM from "react-dom/client"

/**
 * Header
 *  - Logo
 *  - Nav items
 * 
 * Body
 *  - Serach
 *  - card conatiner
 *     - restaurantCard
 *        - img
 *        - Name of res, star rating, cuisines, delivery time
 * 
 * Footer
 * - copyright
 * - links
 * - Address
 * - Contact
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    ) 
};

const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
            <img
                className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xqwpuhgnsaf18te7zvtv" 
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine }</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>

        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Serach</div>  
            <div className="res-container">
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)