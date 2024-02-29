import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnReact,setbtnreact]=useState("Login");

    const OnlineStatus=useOnlineStatus();
   
    useEffect(()=>{
        console.log("useeffect")
    },[btnReact])

   
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg  lg:bg-green-400">

            <div className="w-56">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="flex items-center">
            <ul className="flex p-4 m-4">

            <li className=" px-4">
                Online-Status:{OnlineStatus?"🟢" : "🔴"}
            </li>
            <li className=" px-4"> <Link to="/">Home</Link> </li>
            <li className=" px-4">
                <Link to="/About">About Us</Link> 
                </li>
                <li className=" px-4">
                <Link to="/Contactus">Contact us</Link>
                </li>
                <li className=" px-4">Cart</li>
                <button 
                className="lpx-4" 
                onClick={()=>
                {
                    if(btnReact==="login")
                    {
                        setbtnreact("logout")
                    }

                    else
                    {
                        setbtnreact("login")
                    }
                    
                }} >
                    {btnReact}
                </button>
            </ul>

            </div>
        </div>
    );
};

export default Header;