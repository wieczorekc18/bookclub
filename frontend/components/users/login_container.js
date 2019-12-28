import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/users";
import Login from "./login";

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
