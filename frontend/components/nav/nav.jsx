import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        let currentUser = this.props.currentUser;
        return (
          <div className="navbar">
            <div>
              <Link to="/">Go to Homepage</Link>
            </div>
            <div className="profile-link">
              <Link to={`/profile/${currentUser}`}>Go to my Profile</Link>
            </div>
          </div>
        );
    }
    
}

export default NavBar