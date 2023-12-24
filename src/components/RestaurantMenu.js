import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo ] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenue();
    },[]);

    const fetchMenue = async () => {
        try{
            const data = await fetch(MENU_API+resId);
            const json = await data.json();  
            // console.log(json); 
            setResInfo(json.data)     
        } catch (error){
            console.log(error);
        }
    };

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
    // console.log(totalItemArray);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {totalItemArray.map((arrItem)=>(
                    arrItem.map((item)=>(
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"Rs."}{item.card.info.price / 100}
                        </li>
                    ))
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;

// arrItem.map((item) => (<li key={item.card.info.id}> {item.card.info.name} - {"Rs."}{item.card.info.price / 100}</li>))