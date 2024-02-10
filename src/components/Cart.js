import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartData = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart());
    };

    // Calculate total price
    const total = cartData.reduce(
        (accumulator, item) =>
            accumulator + (item.card.info.price || item.card.info.defaultPrice),
        0
    );

    return (
        <div className="p-2">
            <div className="text-center p-2">
                <h1 className="text-4xl font-bold">Cart</h1>
                <br></br>
            </div>

            <div className="w-6/12 m-auto p-2">
                {cartData.length === 0 ? (
                    <h1 className="text-center font-bold text-2xl text-blue-600">
                        Your cart is empty! Please add some items
                    </h1>
                ) : (
                    <div>
                        <ItemList cardData={cartData} showButton={false}></ItemList>
                        <div className="p-3 text-center font-bold text-2xl mt-4">
                            Total Price: ₹{total.toFixed(2) / 100}
                        </div>
                        <div className="p-3 text-center">
                            <button className="text-3xl font-bold p-2 bg-blue-500 text-white rounded-lg mx-auto" onClick={handleClear}>
                                Clear Cart
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
