import { useState } from "react";

const user=({name})=>{

    const [count]=useState(0);
    const [count2]=useState(2);
    return(

        <div className="user-card">


            <h1>Name: {name}</h1>
            <h2>Location: Darbhanaga</h2>
            <h3>Contact: 8587839938</h3>
            <h4>count:{count}</h4>
            <h4>count2:{count2}</h4>
        </div>

    )
};

export default user;