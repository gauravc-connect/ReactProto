import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client"; 


const heading = React.createElement("h1", {id : "heading", xyz : "abc"}, "Hello from my React !!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

