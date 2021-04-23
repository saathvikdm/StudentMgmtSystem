import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./../context/userContext";
import "./styles.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, loggedIn, setLoggedIn } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    axios
      .post("http://localhost:8080/api/users/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user.id);
        setUser(res.data.user);
        setLoggedIn(true);
      })
      .catch((err) => {
        alert("Wrong username or password entered.");
        console.log(err);
      });
  };

  if (loggedIn) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="login-root row">
      <h4 className="display-3 py-5 login-text">
        Welcome to Student Dashboard
      </h4>
      <div className="mt-0 col-md-4 login-form">
        <h4 className="display-7 pb-5">Please Login to Continue</h4>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
