import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component
{

    constructor(props)

    {
        super(props);

        console.log("parent constructor")

    }
    render()
    {
        console.log(" parent rednder");
        return(
         

            <div>
            <h1>About class</h1>
            <h2>This is namaste react webseries</h2>
            <User name={"Abhishek Raj (function)"}/>
            <UserClass name={"Abhishek Raj (classes)"} location={"darbhanga Class"}/>
            
        </div>

        );
    }
}

// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is namaste react webseries</h2>
//             <User name={"Abhishek Raj (function)"}/>
//             <UserClass name={"Abhishek Raj (classes)"} location={"darbhanga Class"}/>
            
//         </div>
//     );
// };

export default About;