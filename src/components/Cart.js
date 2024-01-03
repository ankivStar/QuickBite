import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = ()=>{
    const cartItems = useSelector((store) =>store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
         dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-11/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 max-w-[768px]">
                <button className="p-2 m-2 bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;