// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"nested")
//     )
// );

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"nested"),React.createElement("h2",{},"nested")] 
    )
);



const heading=React.createElement("h1",{id:"heading"},"hello from react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);