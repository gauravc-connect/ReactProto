import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client"; 

// React create Element => Object
//const heading = React.createElement("h1", {id : "heading", xyz : "abc"}, "Hello from my React !!!");

//const headingJSX = (<h1 id="heading">Hello from my React !!!</h1>);
const jsxHeading = (
    <div>
    <h1>Namaste React</h1>
    </div>
   )
   
const HeadingComponent = () => {
    return <h1 id="heading">Hello babu</h1>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);

root.render(<HeadingComponent/>);



