import RestaurentCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    // Local State Variable - Super powerful variable
    const [ListOfRestaurants, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = ListOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfRestaurant(filteredList);
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    ListOfRestaurants.map((restaurant) => (
                        <RestaurentCard key={restaurant.data.id} resData ={restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;