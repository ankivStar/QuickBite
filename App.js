import React from "react";
import ReactDOM from "react-dom/client"

//JSX -HTML-like or xml - like syntax
// JSX (tranpiled before it reaches the js) - PARCEL - Babel
const Title = () =>(<h1 id="heading">Namaste React using jsx</h1>)

//React component
// class based component-old
// functional component-new

// react functional component
const HeadingComponent = ()=>(
    <div id="conatainer">
        <Title/>
        <h2>{100+300}</h2>
        <h1> Namaste React Functional  Component</h1> 
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)