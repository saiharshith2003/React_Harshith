import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {


    const [list, setList] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [searchtext, setSearchtext] = useState("");
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await
            fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5504297&lng=80.64925389999999&collection=88750&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
            )
        const json = await data.json();
        const apiList = json?.data?.cards.map((res) => { //mapping cards array
            return res?.card?.card?.info;  //getting info data from cards array
        });
        apiList.splice(0, 2) // to remove first two elements of array they dont have info of restro in it

        setList(apiList);
        setFilterList(apiList);

    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>Looks like You are Offline!! Please check your connection</h1>
        )

    if (list.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="" >
            <div className="filter flex ml-10">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black rounded-lg" value={searchtext} onChange={(e) => setSearchtext(e.target.value)} />
                    <button className="bg-green-100 ml-4 px-4 py-2 rounded-lg" onClick={
                        () => {
                            const flist = list.filter
                                (
                                    (res) => res.name.toLowerCase().includes(searchtext.toLowerCase())
                                );
                            setFilterList(flist);
                        }
                    }>Search</button>
                </div>
                <div className="p-4 flex items-center">
                    <button className="bg-gray-100 px-4 py-2 rounded-xl"
                        onClick={() => {
                            const list1 = list.filter(
                                (res) => { return res.avgRating >= 4 }
                            )
                            setFilterList(list1);
                            console.log(list1)
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filterList.map((res) => (
                    <Link className="link-res-card" key={res.id} to={"/restraunts/" + res.id}>
                        <Card key={res.id} cardList={res} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
