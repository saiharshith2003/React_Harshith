import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory"
import { useState } from "react";
const ResMenu = () => {

    const { resId } = useParams();
    const menuList = useResMenu(resId);
    const [showIndex, setShowIndex] = useState(null)
    if (menuList === null) {
        return <Shimmer />
    }

    const { name } = menuList?.cards[0]?.card?.card?.info
    const { cuisines } = menuList?.cards[0]?.card?.card?.info
    //const { title } = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    //const { itemCards } = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(menuList)
    const category =
        menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.["card"]?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    //console.log(category?.[0]?.card?.card?.title)


    //console.log(category)



    return (
        <div>
            <div className="text-center font-bold">
                <h1 className="text-2xl">{name}</h1>
                <h1 className="text-xl">{cuisines}</h1>
            </div>

            <br></br>
            <div>

                {category.map((category, index) => (
                    // controlled component
                    <ResCategory
                        key={category?.card?.card.title}
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                        index={index}
                    />
                ))}

            </div>
        </div>
    )
}

export default ResMenu;
