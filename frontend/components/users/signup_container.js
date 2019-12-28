import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/users";
import Signup from "./signup";

const mapStateToProps = state => {
    // debugger
    return{
        errors: state.errors
    }
};

const mapDispatchToProps = dispatch => {
    // debugger
    return{  
        signup: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
