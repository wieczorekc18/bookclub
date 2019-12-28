import { connect } from "react-redux";
import Profile from "./profile";

import { logout } from "../../actions/users";
import {getFavBooks} from "../../actions/books"

const mapStateToProps = (state, myProps) => {
    // debugger
    let userId = myProps.match.params.userId
    return {
      currentUser: state.session.currentUser,
      userId: userId,
      favorites: Object.keys(state.books).map(id => state.books[id])
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return{
        logout: () => dispatch(logout()),
        getFavBooks: (userId) => dispatch(getFavBooks(userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
