import React from "react";

class UserClass extends React.Component{

    constructor(props)
    {
        super(props);

        this.state={
            userInfo:{
                name:"dummmy",
                location:"Default",
                avatar_url:"http-"
                
            },
            // count2:2,
        };
        // console.log("child constructor")
    }

    async componentDidMount()
    {
        const data=await fetch("https://api.github.com/users/AbhiiMiishraa");
        const json=await data.json();


        this.setState({
            userInfo:json,
        })
        console.log(json);
    }

    render()
    {

        // console.log("child render")

        return(
            <div className="user-card">

            <h1><img src="{this.state.userInfo.avatar_url}"></img></h1>   
            <h1>Name:{this.state.userInfo.name}</h1>
            <h1>Location:{this.state.userInfo.location}</h1>
            <h2>Location:{this.props.location}</h2>
            <h2>count class:{this.state.count}</h2>

            {/* <h2>count class:{this.state.count2}</h2> */}
            <h3>Contact: 8587839938</h3>
        </div>

        )
    }
}

export default UserClass;