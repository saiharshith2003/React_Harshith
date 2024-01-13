import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
const ResMenu = () => {

    const { resId } = useParams();
    const menuList = useResMenu(resId);


    if (menuList === null) {
        return <Shimmer />
    }
    const { name } = menuList?.cards[0]?.card?.card?.info
    const { title } = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    const { itemCards } = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div className="menu-card">
            <h1>{name}</h1>
            <h1>Menu</h1>
            <h3>{title}</h3>
            <div>
                <ul>
                    {
                        itemCards.map((item) => {
                            return <li key={item.card.info.id}>{item.card.info.name} -  Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
                        })
                    }

                </ul>
            </div>

        </div>
    )
}

export default ResMenu;