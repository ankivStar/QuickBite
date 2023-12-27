import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resName} = props
    const {
        cloudinaryImageId, 
        name, 
        cuisines, 
        avgRating, 
        costForTwo,
        sla
    } = resName?.info;

    return (
        <div className="m-4 w-[200px] h-[264px] rounded-2xl transition-all duration-100 ease-in-out hover:cursor-pointer transform hover:scale-95 bg-white">
            <img
                className="w-[100%] h-36 object-cover rounded-2xl"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId} 
            />
            <h3 className="font-Basic font-bold text-[18px] whitespace-nowrap overflow-hidden overflow-ellipsis pl-3 m-0 leading-6">{name}</h3>
            <h4 className="font-Basic font-bold text-[16px] whitespace-nowrap overflow-hidden overflow-ellipsis pl-3 m-0 leading-5">{cuisines.join(", ") }</h4>
            <h4 className="whitespace-nowrap overflow-hidden overflow-ellipsis pl-3 m-0 leading-5">{avgRating} stars</h4>
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis pl-3 m-0 leading-5">{costForTwo} </p>
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis pl-3 m-0 leading-5">{sla.deliveryTime} minutes</p>

        </div>
    ) 
}

//Higher order component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) =>{
    return (props)=>{
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard;