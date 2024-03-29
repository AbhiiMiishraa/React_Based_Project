
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>
{
  
    const {resId}=useParams();
    console.log(resId);

    const resInfo=useRestaurantMenu(resId);
  
    if(resInfo===null)
    {
        return <Shimmer/>;
    }

    const {name,cuisines,costForTwo}=resInfo?.cards[0]?.card?.card?.info;

     const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
     console.log(itemCards);
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h4>{costForTwo}</h4>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=><li>{item.card.info.name}- {"  "} {"Rs"}. {item.card.info.defaultPrice/100 ||item.card.info.price/100 }</li>)}
                
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>


        </div>
    );
};
 
export default RestaurantMenu;