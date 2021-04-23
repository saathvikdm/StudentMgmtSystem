import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "./bootstrap.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
// import Navbar from "./components/navbar/navbar";
import { UserContext } from "./context/userContext";
import Newuser from "./pages/Newuser";
import Sidebar from "./components/sidebar/Sidebar";
import ViewStudents from "./pages/ViewStudents";
import UpdateScore from "./pages/UpdateScore";
import AdminViewStudents from "./pages/AdminViewStudents";
import AdminViewTeachers from "./pages/AdminViewTeachers";

const App = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (userId) {
      const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };

      axios
        .get(`http://localhost:8080/api/users/${userId}`, config)
        .then((res) => {
          // console.log(res.data.user[0]);
          setUser(res.data.user[0]);
          setLoggedIn(true);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  return (
    <div className="root">
      <UserContext.Provider
        value={{ user, setUser, loggedIn, setLoggedIn, userId, setUserId }}
      >
        {/* <Navbar /> */}
        <div>
          {loggedIn ? "" : <Redirect to={"/login"} />}
          <div className="root row">
            {loggedIn ? (
              <div className="appSidebar col-2">
                <Sidebar />
              </div>
            ) : (
              ""
            )}
            <div className="col-12 col-lg-8 rootContent">
              <Switch>
                <Route exact path="/adminviewteachers">
                  <AdminViewTeachers />
                </Route>
                <Route exact path="/adminviewstudents">
                  <AdminViewStudents />
                </Route>
                <Route exact path="/updatescore">
                  <UpdateScore />
                </Route>
                <Route exact path="/viewstudents">
                  <ViewStudents />
                </Route>
                <Route exact path="/addUser">
                  <Newuser />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
