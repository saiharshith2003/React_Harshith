import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
    console.log(props.cardData)
    const { cardData } = props;
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
                                        <span className="font-bold">{name.card.info.name}</span><br></br>
                                        <span className="font-bold">₹
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
                                        <button className="p-2 rounded-lg bg-black text-white shadow-lg">
                                            Add +
                                        </button>
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

