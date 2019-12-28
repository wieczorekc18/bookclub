
import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      validSignup: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        return (
        <ul className="errors-list">
            {this.props.errors.map((error, i) => (
            <li className="error" key={`error-${i}`}>
                <p className="red-exclamation">!</p>
                <p className="error-text">{error}</p>
            </li>
            ))}
        </ul>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(res => {
        if (res.type === "RECEIVE_ERRORS") {
            return this.setState({ validSignup: false });
        } else {
            // debugger
            return this.props.history.push(`/profile/${res.currentUser.extract.id}`);
        }
        });
    }

    handleInput(type) {
        return e => {
        this.setState({ [type]: e.target.value });
        };
    }

  render() {
    // debugger;
    return (
      <div>
        <img className="lib-background" src={window.libURL} alt="lib" />
        <div className="signup-form">
          <h2 className="signup-message-h2">Sign Up</h2>
          <h4 className="signup-message-h4">To create your Bookclub Account</h4>
          <form>
            <label>
              <input
                className="username-signup-input"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInput("username")}
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                className="pw-signup-input"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
              <br />
              <div className="signup-errors">{this.renderErrors()}</div>
              <button className="signup-submit" onClick={this.handleSubmit}>
                Sign Up!
              </button>
            </label>
          </form>
          <h6 className="already">Already have an account?</h6>
          <Link className="back-to-login-button" to="/login">
            <h4 className="login-instead">Login instead</h4>
          </Link>
        </div>
      </div>
    );
  }
}

export default Signup