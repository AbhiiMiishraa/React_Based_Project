import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.js";
import Body from "./components/Body.js";//no need to put extension or you can
import About from "./components/About.js";
import Contactus from "./components/Contactus.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";



//app componendt, layot
const AppLayot=()=>{
   return(
   <div 
   className="app">

  <Header/>
  <Outlet/>

    </div>
    ); 
};


const appRouter=createBrowserRouter(
  [
  {
    path:"/",
    element:<AppLayot/>,
    children:[

    {
      path:"/",
      element:<Body/>,
      
    },


    {
      path:"/about",
      element:<About/>,
      
    },
  
    {
      path:"/Contactus",
      element:<Contactus/>,
   
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>,
   
    },
  

  ],
  errorElement:<Error/>,
  },

 
]);



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


