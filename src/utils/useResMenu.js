import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useResMenu = (resId) => {
    const [menuList, setMenuList] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const Data = await fetch(MENU_URL + resId)
        const json = await Data.json();

        setMenuList(json.data)


    }

    return menuList;
}

export default useResMenu;