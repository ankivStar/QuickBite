import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const  ItemList = ({items})=>{

    const dispatch = useDispatch();

    const handleAddItem = (item)=>{
        // Dispatch an action 
        dispatch(addItem(item));
    }

    return( 
        <div>
            {items.map((item) => ( 
            <div key={item.card.info.id} className="p-[5px] border-gray-200 border-b-2 text-left flex  justify-between items-center gap-2 pb-[14px]">
                <div>
                    <div>
                        <span>{item.card.info.name}</span> <br></br>
                        <span>₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-[14px] text-swiggyDes leading-[1.3] tracking-[-.3px] font-desColor">{item.card.info.description}</p>
                </div>
                <div className="relative">
                    <button className="absolute p-1 py-0 bottom-[-12%] left-[28%] rounded bg-black text-white shadow-lg" onClick={()=>handleAddItem(item)}> Add + </button>
            
                    <div className="w-[118px] h-[96px]">
                        <img src={CDN_URL + item.card.info.imageId} className="w-[118px] h-[96px] rounded object-cover"/>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default ItemList;