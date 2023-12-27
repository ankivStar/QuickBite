import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () =>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <Shimmer/>
    
    // console.log(itemCards);
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info; 

    const allItemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log(allItemCards);
   
    const categories = allItemCards.filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);

    return (
        <div className="text-center">
            <h1 className="text-2xl my-6 font-bold">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
            {/*categories accordian */}
                {categories.map((category, index)=>( <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data = {category?.card?.card}
                    showItems = {index === showIndex  ? true : false}
                    setShowIndex = {(showItems)=>setShowIndex(showItems ? index : null)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;