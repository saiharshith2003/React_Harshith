import { CDN_URL } from "../utils/constants";

const Card = (props) => {
    const { cardList } = props;
    return (

        < div className="card" >
            <img className="resimg" src={CDN_URL + cardList.cloudinaryImageId}></img>
            <h3>{cardList.name}</h3>
            <h5>{cardList.cuisines.join(",")}</h5>
            <h4>{cardList.avgRating + " stars"}</h4>
            <h4>{cardList.sla.deliveryTime + " minutes"}</h4>

        </div >
    )
}

export default Card;