import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id : 'parent'}, 
    React.createElement(
        'div', 
        {id : 'child'}, 
        [React.createElement('h1', {}, "'I'm Ankit"), React.createElement('h2', {}, "'I'm h2 tag")]
    )
);

const heading = React.createElement(
"h1", 
{id : "heading", xyz: "jai ho"}, 
"Hello world from react!");

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)