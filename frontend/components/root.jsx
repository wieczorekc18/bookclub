import React from "react";

import App from "./app";
import { HashRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthRoute, ProtectedRoute } from "../util/users/route_util";
import SignupContainer from "./users/signup_container";
import LoginContainer from "./users/login_container";

const Root = ({ store }) => {
  // debugger
  return(
    <Provider store={store}>
      <HashRouter>
          <Switch>
              <AuthRoute exact path="/login" component={LoginContainer} />
              <AuthRoute exact path="/signup" component={SignupContainer} />
          </Switch>
        <App/>
      </HashRouter>
    </Provider>
  )
};

export default Root;
