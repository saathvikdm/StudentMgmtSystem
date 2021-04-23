import React, { Component, useContext, useState } from "react";
import "./sidebar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { UserContext } from "./../../context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faUserCircle,
  faEye,
  faPencilAlt,
  faSignOutAlt,
  faUserPlus,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import Teachernav from "./Teachernav";
import Adminnav from "./Adminnav";

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);

  const { user, loggedIn, setLoggedIn } = useContext(UserContext);

  const openFunc = () => {
    setToggle(!toggle);
  };

  const handleLogOut = (e) => {
    sessionStorage.clear("user");
    localStorage.clear("token");
    localStorage.clear("userId");
    setLoggedIn(false);
  };

  // console.log(user.type);

  return (
    <div>
      <section className="appbar">
        <aside className="sidebar">
          <header style={{ color: "white", textAlign: "center" }}>
            Student Management System
          </header>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a>
                  <NavLink
                    style={{ fontSize: "inherit" }}
                    to={loggedIn ? "/" : "/login"}
                    exact
                  >
                    <span>
                      Home
                      <FontAwesomeIcon
                        icon={faHome}
                        style={{ float: "right" }}
                      />
                    </span>
                  </NavLink>
                </a>
              </li>

              {user.type == 2 ? <Teachernav data={loggedIn} /> : ""}
              {user.type == 1 ? <Adminnav data={loggedIn} /> : ""}

              <li>
                <a>
                  <NavLink
                    style={{ fontSize: "inherit", paddingRight: "13px" }}
                    to={loggedIn ? "/about" : "/login"}
                    exact
                  >
                    <span>
                      Edit Profile
                      <FontAwesomeIcon
                        icon={faUserEdit}
                        style={{ float: "right" }}
                      />
                    </span>
                  </NavLink>
                </a>
              </li>

              <li>
                <a
                  onClick={(e) => handleLogOut(e)}
                  style={{
                    cursor: "pointer",
                    paddingLeft: "29px",
                    paddingRight: "30px",
                  }}
                >
                  <span>
                    Logout
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      style={{ float: "right" }}
                    />
                  </span>
                </a>
              </li>
            </ul>
            <small className="text-muted version-text">Ver: 0.1-Alpha</small>
          </nav>
        </aside>
      </section>
    </div>
  );
};

export default Sidebar;
