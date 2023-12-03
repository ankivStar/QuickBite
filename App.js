const heading = React.createElement("h1", {id : "heading", xyz: "jai ho"}, "Hello world from react!")
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)