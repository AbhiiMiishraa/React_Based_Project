import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";

import {useEffect, useState} from "react";
import { Link, json } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body=()=>{
//local state variable
const [ListOfRestaurant,setListOfRestaurant]=useState([]);
const [filterRes,setfilterRes]=useState([]);
const [SearchText,setSearchText]=useState("");

const resturantcardpromoted=withPromotedLabel(RestaurantCard);

useEffect(()=>{

  
    fetchData();
},[]);



const fetchData=async()=>{
    const data=await fetch(
     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();
    console.log(json);


    
   
    setListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterRes(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

};



    const OnlineStatus=useOnlineStatus();

    if(OnlineStatus===false)
    return (
    <h1>
    You are offline;
    </h1>
    );


    return ListOfRestaurant.length===0? (<Shimmer/>):
     (
  
        <div className="body">
  
            <div className="filter flex">

            <div className="m-4 p-4">
                <input type="text" className="border border-solid border-black" value={SearchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                />

               
                <button
                onClick={()=>{

                    console.log(SearchText);
                    //filter logic

                    const filteredRestaurant=ListOfRestaurant.filter(
                        (res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()) 
                        );
                   setfilterRes(filteredRestaurant);

                }}
                
                
                className="px-4 py-2 bg-green-200 m-4 rounded-lg">Search here</button>
                 

            </div>

            <div className="flex items-center rounded-lg">
            <button className="px-2 py-6 bg-green-200 m-4 rounded-lg items-center" 
                onClick={()=> {
                   
                    const filteredList=ListOfRestaurant.filter(
                        (res)=>res.info.avgRating<6
        
                    );

                    setListOfRestaurant(filteredList);
                   
                }}
             
                >Top Rated Resturant</button>

            </div>


               
            </div>
  
            <div className="flex flex-wrap">
  
            {
                filterRes.map((restaurant)=>(
                    <Link key={restaurant.info.id}
                     to={"/restaurants/"+restaurant.info.id}
                      >

                      {
                        restaurant.info.promoted?<resturantcardpromoted/>: <RestaurantCard  resData={restaurant}/>
                      }
                      
                  
                      
                    </Link>
                    
                    ))
            }
            </div>
        </div>
    );
  };


export default Body;
