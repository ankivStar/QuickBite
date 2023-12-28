import ItemList from "./ItemList";

const NestedRestaurantCategory = ({data, showItems, setShowIndex}) =>{

    const handleClick = () =>{
        setShowIndex(!showItems);
    } 
    return (
        <div className="my-4 bg-gray-50 shadow-sm p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-semibold text-lg">{data.title}({data.itemCards.length})</span>
                <span>{showItems ? "⬆️": "⬇️"}</span>
            </div>
            {showItems && <ItemList items = {data.itemCards}/>}
        </div>
    )
}

export default NestedRestaurantCategory;