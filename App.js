import React from "react";
import ReactDOM from "react-dom/client";


/*
* Heading
*   -logo
*   -Nav items
* Body
*   -Search
*   -RestaurentContainer
*       -RestaurentCard
*       -Img
*       -Name of Res, Star rating, cuisine, delivery time 
* Footer
*   -Copyright
*   -Links
*   -Address
*   -Contact
*/


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurentCard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    } = resData?.data;

    return (
        <div className="res-card" style={{backgroundColor: '#f0f0f0'}}>
            <img 
                className="res-logo"
                alt= "res-logo" 
                src={ resData.data.cloudinaryImageId }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>${costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

const resList = [{
    type: "restaurant",
    data: {
        type: "F",
        id: "334475",
        name: "KFC",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingString: "500+ ratings",
        cloudinaryImageId: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002510.jpg?ver=60.2",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "$400 For Two",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        slugs: {
            restaurent: "kfc-btm-layout-btm",
            city: "bangalore",
        },
        cityState: "1",
        address: "KFC restaurent, 942,sv Tower, 16th Main, BTM 2nd Stage, 560076",
        locality: "2nd Stage",
        presentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
            header: "",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT", 
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        ribbon: [
            {
                type: "PROMOTED",
            },
        ],
        chain: [],
        freeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
        },
        availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMassage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyVendor: "",
        adTrackingId: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
        badges: {
            imageBased: [],
            textBased: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
            restaurentId: "334475",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 3.5,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentailService: false,
            iconType: "Empty",
        },
        promoted: true,
        avgRating: "3.8",
        totalRating: 500,
        new: false,
    },
    subtype: false,
}, {
    type: "restaurant",
    data: {
        type: "F",
        id: "334476",
        name: "Healthy Bites",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingString: "500+ ratings",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4dfbe240cf1a2be01e6f2805c75c4279",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "$400 For Two",
        deliveryTime: 38,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        slugs: {
            restaurent: "kfc-btm-layout-btm",
            city: "bangalore",
        },
        cityState: "1",
        address: "KFC restaurent, 942,sv Tower, 16th Main, BTM 2nd Stage, 560076",
        locality: "2nd Stage",
        presentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
            header: "",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT", 
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        ribbon: [
            {
                type: "PROMOTED",
            },
        ],
        chain: [],
        freeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
        },
        availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMassage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyVendor: "",
        adTrackingId: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
        badges: {
            imageBased: [],
            textBased: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
            restaurentId: "334475",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 3.5,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentailService: false,
            iconType: "Empty",
        },
        promoted: true,
        avgRating: "4.0",
        totalRating: 500,
        new: false,
    },
    subtype: false,
}, {
    type: "restaurant",
    data: {
        type: "F",
        id: "334478",
        name: "Maghana Hotel",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingString: "500+ ratings",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/glepanv4xjfnhsbieam1",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 45000,
        costForTwoString: "$400 For Two",
        deliveryTime: 40,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        slugs: {
            restaurent: "kfc-btm-layout-btm",
            city: "bangalore",
        },
        cityState: "1",
        address: "KFC restaurent, 942,sv Tower, 16th Main, BTM 2nd Stage, 560076",
        locality: "2nd Stage",
        presentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
            header: "",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT", 
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        ribbon: [
            {
                type: "PROMOTED",
            },
        ],
        chain: [],
        freeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
        },
        availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMassage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyVendor: "",
        adTrackingId: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
        badges: {
            imageBased: [],
            textBased: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
            restaurentId: "334475",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 3.5,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentailService: false,
            iconType: "Empty",
        },
        promoted: true,
        avgRating: "4.2",
        totalRating: 500,
        new: false,
    },
    subtype: false,
}, {
    type: "restaurant",
    data: {
        type: "F",
        id: "334475",
        name: "KFC",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingString: "500+ ratings",
        cloudinaryImageId: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002510.jpg?ver=60.2",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "$400 For Two",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        slugs: {
            restaurent: "kfc-btm-layout-btm",
            city: "bangalore",
        },
        cityState: "1",
        address: "KFC restaurent, 942,sv Tower, 16th Main, BTM 2nd Stage, 560076",
        locality: "2nd Stage",
        presentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
            header: "",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT", 
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        ribbon: [
            {
                type: "PROMOTED",
            },
        ],
        chain: [],
        freeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
        },
        availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMassage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyVendor: "",
        adTrackingId: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
        badges: {
            imageBased: [],
            textBased: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
            restaurentId: "334475",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 3.5,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentailService: false,
            iconType: "Empty",
        },
        promoted: true,
        avgRating: "3.8",
        totalRating: 500,
        new: false,
    },
    subtype: false,
}, {
    type: "restaurant",
    data: {
        type: "F",
        id: "334476",
        name: "Healthy Bites",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingString: "500+ ratings",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4dfbe240cf1a2be01e6f2805c75c4279",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "$400 For Two",
        deliveryTime: 38,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        slugs: {
            restaurent: "kfc-btm-layout-btm",
            city: "bangalore",
        },
        cityState: "1",
        address: "KFC restaurent, 942,sv Tower, 16th Main, BTM 2nd Stage, 560076",
        locality: "2nd Stage",
        presentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
            header: "",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT", 
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        ribbon: [
            {
                type: "PROMOTED",
            },
        ],
        chain: [],
        freeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
        },
        availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMassage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyVendor: "",
        adTrackingId: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
        badges: {
            imageBased: [],
            textBased: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
            restaurentId: "334475",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 3.5,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentailService: false,
            iconType: "Empty",
        },
        promoted: true,
        avgRating: "4.0",
        totalRating: 500,
        new: false,
    },
    subtype: false,
}, {
    type: "restaurant",
    data: {
        type: "F",
        id: "334478",
        name: "Maghana Hotel",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingString: "500+ ratings",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/glepanv4xjfnhsbieam1",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 45000,
        costForTwoString: "$400 For Two",
        deliveryTime: 40,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        slugs: {
            restaurent: "kfc-btm-layout-btm",
            city: "bangalore",
        },
        cityState: "1",
        address: "KFC restaurent, 942,sv Tower, 16th Main, BTM 2nd Stage, 560076",
        locality: "2nd Stage",
        presentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
            header: "",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT", 
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        ribbon: [
            {
                type: "PROMOTED",
            },
        ],
        chain: [],
        freeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
        },
        availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMassage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyVendor: "",
        adTrackingId: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
        badges: {
            imageBased: [],
            textBased: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
            restaurentId: "334475",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 3.5,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentailService: false,
            iconType: "Empty",
        },
        promoted: true,
        avgRating: "4.2",
        totalRating: 500,
        new: false,
    },
    subtype: false,
}, {
    type: "restaurant",
    data: {
        type: "F",
        id: "334478",
        name: "Maghana Hotel",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingString: "500+ ratings",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/glepanv4xjfnhsbieam1",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 45000,
        costForTwoString: "$400 For Two",
        deliveryTime: 40,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        slugs: {
            restaurent: "kfc-btm-layout-btm",
            city: "bangalore",
        },
        cityState: "1",
        address: "KFC restaurent, 942,sv Tower, 16th Main, BTM 2nd Stage, 560076",
        locality: "2nd Stage",
        presentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
            header: "",
            shortDescriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT", 
                },
            ],
            descriptionList: [
                {
                    meta: "FREE DELIVERY",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        ribbon: [
            {
                type: "PROMOTED",
            },
        ],
        chain: [],
        freeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
        },
        availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMassage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyVendor: "",
        adTrackingId: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
        badges: {
            imageBased: [],
            textBased: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
            restaurentId: "334475",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 3.5,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentailService: false,
            iconType: "Empty",
        },
        promoted: true,
        avgRating: "4.2",
        totalRating: 500,
        new: false,
    },
    subtype: false,
} ]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurent) => (
                        <RestaurentCard key = {restaurent.data.id} resData = {restaurent}/>
                    ))
                }
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);