import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
 
const Body = () => {

    // local state variable - Super powerful variable
    const [listOfReastaurant, setlistOfRestaurant] = useState(resList)

    return (
        <div className="body">
          <div className="filter">
          <button className="filter-btn" onClick={()=>{
            // filter logic here
            const filteredData = listOfReastaurant.filter((res) => res.data.avgRating > 4);
            setlistOfRestaurant(filteredData);
          }}
          >
            Top Rated Restaurant 
            </button>
          </div>  
          <div className="res-container">
              {
                  listOfReastaurant.map((restaurant) => ( <RestaurantCard key={restaurant.data.id} resName = {restaurant} />
              ))} 
          </div>
        </div>
    )
}
export default Body;