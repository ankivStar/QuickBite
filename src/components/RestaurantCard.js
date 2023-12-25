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
        <div className="res-card" style={{backgroundColor : "#fff"}}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId} 
            />
            <h3 className="card-style">{name}</h3>
            <h4 className="card-style">{cuisines.join(", ") }</h4>
            <h4 className="card-style">{avgRating } stars</h4>
            <p className="card-style">{costForTwo} </p>
            <p className="card-style">{sla.deliveryTime} minutes</p>

        </div>
    )
}

export default RestaurantCard;