import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/navbar/navbar";

export default class App extends Component {
  state = {
    userId: "",
    loggedIn: false,
    userData: null,
  };

  setUserId = (user) => {
    this.setState({
      userId: user,
    });

    const { userId, userData } = this.state;
    console.log(userId, typeof userId, userData, typeof userData);
  };

  setUserData = (userData) => {
    this.setState({
      userData,
    });
  };

  componentDidMount() {
    const userData = sessionStorage.getItem("user");
    this.setUserData(userData);
  }

  setLogged = (data) => {
    this.setState({
      loggedIn: data,
    });
    return this.state.loggedIn;
  };

  render() {
    const { userId } = this.state;
    if (!this.state.user) {
      return (
        <div className="root">
          <Navbar loggedIn={this.setLogged} />
          <div className="container">
            <Redirect to={"/login"} />
            <div className="root">
              <div className="container">
                <Switch>
                  <Route exact path="/login">
                    <Login setUserId={this.setUserId} />
                  </Route>
                  <Route exact path="/">
                    <Home data={userId} />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="root">
        <Navbar loggedIn={this.setLogged} />
        <div className="container">
          <Switch>
            <Route exact path="/login">
              <Login setUserId={this.setUserId} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
