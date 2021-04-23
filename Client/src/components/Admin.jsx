import Default from "../assets/default.jpg";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "./../context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faEye,
  faUserPlus,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const Admin = (props) => {
  const { firstname, lastname, sno } = props.data;

  //   console.log(props.data);

  return (
    <div className="container pt-5 row">
      <div
        className="card mb-3"
        style={{ maxWidth: "540px", maxHeight: "195px" }}
      >
        <div className="row g-0">
          <div className="col-md-4 mx-auto my-2">
            <img src={Default} alt="..." height="175px" width="175px" />
          </div>
          <div className="col-md-8">
            <div className="card-body pb-0">
              <h5 className="card-title">Admin Profile</h5>
              <h1 className="card-text">{`${firstname} ${lastname}`}</h1>
              <h4>{`SSN: ${sno}`}</h4>
              <p className="card-text">
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <h5 className="card-title" style={{ color: "white" }}>
        Quick Actions
      </h5>
      <div className="row">
        <div className="tile mx-5 my-3">
          <Link to="/addUser" style={{ color: "inherit" }}>
            <p>
              New User <br />
              <h2 style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faUserPlus} style={{}} />
              </h2>
            </p>
          </Link>
        </div>
        <div className="tile mx-5 my-3">
          <Link to="/adminviewteachers" style={{ color: "inherit" }}>
            <p>
              View Teachers
              <br />
              <h2>
                <FontAwesomeIcon icon={faUsers} style={{}} />
              </h2>
            </p>
          </Link>
        </div>
        <div className="tile mx-5 my-3">
          <Link to="/adminviewstudents" style={{ color: "inherit" }}>
            <p>
              View Students
              <br />
              <h2>
                <FontAwesomeIcon icon={faUserGraduate} style={{}} />
              </h2>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
