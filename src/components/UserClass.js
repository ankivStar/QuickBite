import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default",
                avatar_url : "https://dummy-photo"
            }
        }
        // console.log(props);
    }

   async componentDidMount(){
        // console.log("component mount called");
        const data = await fetch("https://api.github.com/users/ankivStar");
        const json = await data.json( );

        this.setState({
            userInfo : json
        })
        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component did update is called");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){
        
        // const {name, location} = this.props;
        const {name, location, avatar_url } = this.state.userInfo;

        return(
            <div className="user-card"> 
                <img src = {avatar_url}/>             
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : abc@ankitverma</h4>
            </div>
        )
    }
}

export default UserClass;