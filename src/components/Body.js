import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
 
const Body = () => {

    // local state variable - Super powerful variable
    const [listOfReastaurant, setlistOfRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const [listOfFilteredRestaurant, setListOfFilteredRestaurant] = useState([]);


    useEffect(()=>{
      console.log("useEffect called");
      fetchData()
    }, [])

    console.log("body rendered");

    const fetchData = async  () =>{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
      const allRestaurant = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setlistOfRestaurant(allRestaurant)
      setListOfFilteredRestaurant(allRestaurant)
    };

    return listOfReastaurant.length === 0?(
    <Shimmer/>
    ):(
        <div className="body">
          <div className="filter">
            <div className="search">
                  <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                  }}/>
                  <button onClick={()=>{
                     // filter the restaurnt cards and update the UI
                     const filteredRestaurant = listOfReastaurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                     setListOfFilteredRestaurant(filteredRestaurant)
                  }}>Search</button> 
            </div>
          <button className="filter-btn" onClick={()=>{
            // filter logic here
            const filteredRestaurant = listOfReastaurant.filter((res) => res.info.avgRating > 4);
            setListOfFilteredRestaurant(filteredRestaurant);
          }}
          >
            Top Rated Restaurant 
            </button>
          </div>  
          <div className="res-container">
              {
                 listOfFilteredRestaurant.map((restaurant) => ( <RestaurantCard key={restaurant?.info?.id} resName = {restaurant} />
              ))} 
          </div>
        </div>
      )
}
export default Body;