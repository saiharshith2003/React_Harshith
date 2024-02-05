import { useState } from "react";

import ItemList from "./ItemList";

const ResCategory = (props) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show)
    }
    return (
        <div>
            <div className="m-auto w-8/12">
                <div className="m-4 p-8  border-gray-200 border-b-2 shadow-md text-xl  cursor-pointer">
                    <div className="flex justify-between font-bold" onClick={handleClick}>{props.data.title}
                        <div>⬇️</div>
                    </div>
                    {show && <ItemList cardData={props.data.itemCards} />}
                </div>

            </div>
        </div>
    )
}
export default ResCategory;


