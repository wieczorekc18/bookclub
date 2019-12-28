import React from 'react';
import { Link } from 'react-router-dom'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      validLogin: false
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

    this.props.login(this.state).then(res => {
      if (res.type === "RECEIVE_ERRORS") {
            return this.setState({ validLogin: false });
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
    return (
      <div>
        <img className="lib-background" src={window.libURL} alt="lib" />
        <div className="login-form">
          <h2 className="signup-message-h2">Log In</h2>
          <h4 className="signup-message-h4">To resume Bookclubbing</h4>
          <form>
            <label>
              <input
                className="username-login-input"
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
                className="pw-login-input"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
              <br />
              <div className="login-errors">{this.renderErrors()}</div>
              <button className="signup-submit" onClick={this.handleSubmit}>
                Login!
              </button>
            </label>
          </form>
          <h6 className="already">Don't have an account?</h6>
          <Link className="back-to-signup-button" to="/signup">
            <h4 className="login-instead">Signup instead</h4>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login

