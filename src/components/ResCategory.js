import { useState } from "react";

import ItemList from "./ItemList";

const ResCategory = (props) => {
    const { setShowIndex, showItems } = props
    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div>
            <div className="m-auto w-8/12 ">
                <div className="m-4 p-8  border-gray-200 border-b-2 shadow-md text-xl  cursor-pointer rounded-xl">
                    <div className="flex justify-between font-bold" onClick={handleClick}>{props.data.title}
                        <div>⬇️</div>
                    </div>
                    {showItems && <ItemList cardData={props.data.itemCards} />}
                </div>

            </div>
        </div>
    )
}
export default ResCategory;


