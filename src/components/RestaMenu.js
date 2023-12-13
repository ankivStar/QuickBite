import { useEffect, useState } from "react";


import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const RestaMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);
  const [infoCards, setInfoCards] = useState([]);
  const [menuHidden, setMenuHidden] = useState(false);
  const [buttonName, setButtonName] = useState(true);

 

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=425");
        const json = await data.json();
        setResInfo(json.data);

        // Extract and set infoCards after setting resInfo
        const x = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const extractedInfoCards = x
          ?.map((card) => card?.card?.card.itemCards)
          .filter((checkData) => checkData !== undefined)
          .flat()
          .slice(0, 34); // Limit to the first 20 items
        setInfoCards(extractedInfoCards || []);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, [resId]);

  if (resInfo === null) {
    return <Shimmer/>;
  }
  console.log(infoCards.length);

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;


  // toggle button it is the extra style..
  const toggleMenu = () => {
    setMenuHidden(!menuHidden);
    setButtonName(!buttonName)
  };

  const buttonColor = menuHidden ? "green" : "red";


  return (
    <div className="menu">
      
        <h1>{name}</h1>
        
      
      <p>{cuisines.join(",")} - {costForTwoMessage}</p>

      
      <button className="button-style" onClick={toggleMenu} style={{ backgroundColor: buttonColor }}>
        {/* {buttonName == false ? <h4>Show Menu</h4> : <h4>Close Menu</h4>} */}
        {menuHidden ? <span style={{backgroundColor:"#fff"}}>&#x1F50D;</span> : <span style={{backgroundColor:"#fff"}}>&#x274C;</span>}
        
        </button>


      
      <ul className={menuHidden ? "menu-hidden" : ""}>
        {infoCards.length > 0 ? (
          infoCards.map((item, index) => (
            <li key={index}>
              {item.card.info.name} - {" Rs."}
              {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </li>
          ))
        ) : (
          <li>Service will be available soon...</li>
  )}
</ul>
    </div>
  );
};

export default RestaMenu;