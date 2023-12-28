import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";
import NestedRestaurantCategory from "./NestedRestaurantCategory";


const NestedCategory = ({data})=>{
    // console.log(items);

    const [showIndex, setShowIndex] = useState(null);
   
    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg py-4">
            <div className="font-bold text-xl">{data.title}</div>
            <div className="">
                {data.categories.map((category,index) => ( 
                    <NestedRestaurantCategory 
                        key={category?.title} 
                        data={category}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={(showItems) => setShowIndex(showItems ? index : null)}
                    />
                ))}
            </div>
        </div>
    )
}

export default NestedCategory;