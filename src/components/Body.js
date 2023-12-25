import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import {Link} from "react-router-dom";
 
const Body = () => {

    // local state variable - Super powerful variable
    const [listOfReastaurant, setlistOfRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const [listOfFilteredRestaurant, setListOfFilteredRestaurant] = useState([]);


    useEffect(()=>{
      fetchData()
    }, [])

    const fetchData = async  () =>{
      try{
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json()

        async function checkJsonData(jsonData){
          for(let i = 0; i < jsonData?.data?.cards?.length; i++){
            let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            if(checkData !== undefined){
              return checkData;
            }
          }
        } 

        const allRestaurant = await checkJsonData(json);
        setlistOfRestaurant(allRestaurant)
        setListOfFilteredRestaurant(allRestaurant)
      } catch(error) {
        console.log(error);
      }
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
                 listOfFilteredRestaurant.map((restaurant) => ( 
                 <Link
                 key={restaurant?.info?.id}
                 to={"/restaurant/"+restaurant?.info?.id}>
                  <RestaurantCard  resName = {restaurant}/>
                 </Link>
              ))} 
          </div>
        </div>
      )
}
export default Body;