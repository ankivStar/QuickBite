import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{

    const handleClick = () =>{
        setShowIndex(!showItems);
    }  
    return (
        <div>
            <div className="w-11/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 max-w-[768px]">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-semibold text-lg">{data.title}({data.itemCards.length})</span>
                    <span>{showItems ? "⬆️": "⬇️"}</span>
                </div>
                {showItems && <ItemList items = {data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;