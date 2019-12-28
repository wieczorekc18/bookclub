import React from "react"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import { logout } from "../../actions/users"

const msp = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
      logout: () => dispatch(logout())
  };
};

class LogoutButton extends React.Component {

    render(){
        // debugger
        return(
            <div>
                <h4 onClick={this.props.logout} className="logout-button">Logout</h4>
            </div>
        )
    }
}

export default withRouter(connect(msp, mdp)(LogoutButton));