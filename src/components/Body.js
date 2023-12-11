import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
 
const Body = () => {

    // local state variable - Super powerful variable
    const [listOfReastaurant, setlistOfRestaurant] = useState([])

    useEffect(()=>{
      console.log("useEffect called");
      fetchData()
    }, [])

    const fetchData = async  () =>{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
      setlistOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfReastaurant.length === 0){
      return <Shimmer/>
    }

    return (
        <div className="body">
          <div className="filter">
          <button className="filter-btn" onClick={()=>{
            // filter logic here
            const filteredData = listOfReastaurant.filter((res) => res.info.avgRating > 4);
            setlistOfRestaurant(filteredData);
          }}
          >
            Top Rated Restaurant 
            </button>
          </div>  
          <div className="res-container">
              {
                  listOfReastaurant.map((restaurant) => ( <RestaurantCard key={restaurant?.info?.id} resName = {restaurant} />
              ))} 
          </div>
        </div>
    )
}
export default Body;