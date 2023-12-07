import React from "react";
import ReactDOM from "react-dom/client"

//JSX -HTML-like or xml - like syntax
// JSX (tranpiled before it reaches the js) - PARCEL - Babel
const jsxHeading = <h1 id="heading">Namaste React using jsx</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxHeading)