import { CDN_URL } from "../utils/constants";

const Card = (props) => {
    const { cardList } = props;
    return (

        < div className="ml-14 m-4 p-4 w-[260px] h-[450px] hover:cursor-pointer hover:bg-gray-300 shadow-md rounded-xl" >
            <img className="h-[50%] w-[100%] rounded-xl" src={CDN_URL + cardList.cloudinaryImageId}></img>
            <h3 className="font-bold py-2 text-lg">{cardList.name}</h3>
            <h5 className="py-1">{cardList.cuisines.join(",")}</h5>
            <h4 className="py-1">{cardList.avgRating + " stars"}</h4>
            <h4 className="py-1">{cardList.sla.deliveryTime + " minutes"}</h4>

        </div >
    )
}

export const withPromotedLabel = (Card) => {
    return (props) => {
        return (

            <div>
                <label className="absolute ml-12 m-2 bg-black text-white p-2 rounded-md ">Promoted</label>
                <Card {...props} />
            </div>
        )
    }
}

export default Card;