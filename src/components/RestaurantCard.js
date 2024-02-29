
import { CDN_URL } from "../utils/constants";


const RestaurantCard=(props)=>{
    const {resData}=props;
  
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    }=resData?.info;
  
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-green-50 hover:bg-green-200 " >
            
           <img 
           className="rounded-lg"
           
           alt="Meghna resturant"
           src={CDN_URL+
           cloudinaryImageId}
  
           />
                 
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="italic">{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            
            
            
  
        </div>
    );
  };

//higher order componenent

  export const withPromotedLabel=(RestaurantCard)=>{

    return ( props)=>{

        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );

    };
  };

  
  export default RestaurantCard;