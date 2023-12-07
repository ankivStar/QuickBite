import React from "react";
import ReactDOM from "react-dom/client"

const Title = (<h1 id="heading">Namaste React using jsx</h1>)

// react functional component
const HeadingComponent = ()=>(
    <div id="conatainer">
        {Title}
        <h2>{100+300}</h2>
        <h1> Namaste React Functional  Component</h1> 
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)