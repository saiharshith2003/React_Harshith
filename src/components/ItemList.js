import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
const ItemList = (props) => {
    console.log(props.cardData)
    const { cardData, showButton } = props;
    const dispatch = useDispatch()
    const handleAdd = (cardData) => {
        dispatch(addItem(cardData))
    }
    const handleRemove = (data) => {
        dispatch(removeItem({ id: data.card.info.id }));
    };
    return (
        <div className="">
            {
                cardData.map(
                    (name) => {
                        return (
                            <div
                                key={name.card.info.id}
                                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                                <div>
                                    <div className="py-2">
                                        <span className="font-bold text-2xl">{name.card.info.name}</span><br></br>
                                        <span className="py-2 font-bold text-xl">₹
                                            {name.card.info.price ? name.card.info.price / 100 : name.card.info.defaultPrice / 100}
                                        </span>
                                    </div>
                                    <p className="text-base">{name.card.info.description}</p>
                                </div>
                                <div className="p-2 relative">
                                    <div className="w-32 h-48">
                                        <img src={CDN_URL + name.card.info.imageId} className="w-[380px] h-[180px] object-cover rounded-lg shadow-lg   " />
                                    </div>
                                    <div className="absolute top-0 left-9 ">
                                        {showButton && (
                                            <button
                                                className="p-2 rounded-lg bg-black text-white shadow-lg"
                                                onClick={() => handleAdd(name)}
                                            >
                                                Add +
                                            </button>
                                        )}
                                    </div>
                                    <div className="absolute top-0 right-0 ">
                                        {!showButton && (
                                            <button
                                                className="p-2 rounded-lg bg-red-500 text-white shadow-lg"
                                                onClick={() => handleRemove(name)}
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                </div>

                            </div>
                        )
                    })
            }
        </div>
    )
}

export default ItemList;

