import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/users/route_util";
import HomeContainer from "./home/home_container"
import ProfileContainer from "./users/profile_container"
import BookShowContainer from "./books/book_show_container"
import EditBookContainer from "./books/edit_container"
import NavBarContainer from "./nav/nav_container"

const App = () => {
    // // debugger
    return (
      <div>
        <Route exact path="/" component={HomeContainer}></Route>
        <Route exact path="/books/:bookId" component={BookShowContainer}></Route>
        <Route exact path="/books/:bookId/edit" component={EditBookContainer}></Route>
        <ProtectedRoute path="/" component={NavBarContainer}></ProtectedRoute>
        <ProtectedRoute exact path="/profile/:userId" component={ProfileContainer} />
      </div>
    );
};

export default App;
