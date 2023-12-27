import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>
    
    // console.log(itemCards);
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;


    // let {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card  

    let totalItemArray = [];
    const allItemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    for(let index = 0; index < allItemCards.length; index++){
        let {itemCards} = allItemCards[index]?.card?.card;

        if(itemCards !== undefined){
            totalItemArray.push(itemCards);
        }
    }
    console.log(totalItemArray);

    return (
        <div className="pl-12">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2 className="text-xl font-semibold">Menu</h2>
            <ul>
                {totalItemArray.map((arrItem)=>(
                    arrItem.map((item)=>(  
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"Rs."}{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                        </li>
                    ))
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;