import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react webseries</h2>
            {/* <User name={"Ankit Verma (function)"} country={"India"}/> */}
            <UserClass name={"Ankit Verma (class)"} location={"Lucknow"}/>
        </div>
    );
};

export default About; 