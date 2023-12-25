import { useEffect, useState } from "react"

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(2 );

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Ankit");
        }, 1000);
        

        // unmounting
        return() =>{
            clearInterval(timer);
            console.log("useEffect return called");
        }
    }, []);

    console.log("render");

    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h2>Name : {props.name}</h2>
            <h3>Location : Lucknow</h3>
            <h3>Country : {props.location}</h3>
            <h4>Contact : abc@ankitverma</h4>
        </div>
    )
}

export default User