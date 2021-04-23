import Default from "../assets/default.jpg";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "./../context/userContext";
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

const Teacher = (props) => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const { firstname, lastname, sno, dept, ssid } = props.data;
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);
  const [score, setScore] = useState(null);
  const [editView, setEditView] = useState(false);
  const [subcode, setSubcode] = useState(null);
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState(null);
  const [m3, setM3] = useState(null);
  const [strength, setStrength] = useState(null);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(`http://localhost:8080/api/users/class/${ssid}`, config)
      .then((res) => {
        // console.log(res.data.user);
        setStudents(res.data.user);
        setLoading(false);
        setStrength(Object.keys(res.data.user).length);
      })
      .catch((err) => console.log(err));
  }, []);

  function showMarks(i, marks) {
    setActive(i);
    if (active === i) {
      setActive(null);
    }
    setScore(marks);
  }

  function buttonClick() {
    setEditView(true);
    if (editView) setEditView(false);
  }

  const handleSubmit = (e, subcode, userID) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    const data = {
      test1: parseInt(m1),
      test2: parseInt(m2),
      test3: parseInt(m3),
      finalIa: ((parseInt(m1) + parseInt(m2) + parseInt(m3)) / 3).toFixed(2),
      subcode,
      userID,
      ssid,
    };

    if (m1 === null && m2 === null && m3 === null) {
      alert("Please enter atleast one IA Score");
    }

    // console.log(data);

    axios
      .put("http://localhost:8080/api/marks", data, config)
      .then((res) => {
        // console.log(res.data);
        alert("updated successfully");
      })
      .catch((err) => console.log(err));

    setM1(null);
    setM2(null);
    setM3(null);
    setSubcode(null);
    e.preventDefault();
    e.target.reset();
  };

  const handleNewUser = () => {
    <Link to="/addUser" />;
  };

  return (
    <div className="container">
      <div className="row pt-5">
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
                <h5 className="card-title">Teacher Profile</h5>
                <h1 className="card-text">{`${firstname} ${lastname}`}</h1>
                <h4>{`SSN: ${sno}`}</h4>
                <p className="card-text">{`Department: ${dept.dept_name}`}</p>
                <p className="card-text">
                  {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 className="card-title" style={{ color: "white" }}>
        Quick Actions
      </h5>
      <div className="row">
        <div className="tile mx-5 my-3">
          <p>
            Class <br />
            <h2>{`${ssid}`}</h2>
          </p>
        </div>
        <div className="tile mx-5 my-3">
          {" "}
          <p>
            No. of Students <br />
            <h2 style={{ textAlign: "center" }}>{`${strength}`}</h2>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="tile mx-5 my-3">
          <Link to="/addUser" style={{ color: "inherit" }}>
            <p>
              New Student <br />
              <h2 style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faUserPlus} style={{}} />
              </h2>
            </p>
          </Link>
        </div>
        <div className="tile mx-5 my-3">
          <Link to="/viewstudents" style={{ color: "inherit" }}>
            <p>
              View Students
              <br />
              <h2>
                <FontAwesomeIcon icon={faEye} style={{}} />
              </h2>
            </p>
          </Link>
        </div>
        <div className="tile mx-5 my-3">
          <Link to="/updatescore" style={{ color: "inherit" }}>
            <p>
              Update Scores
              <br />
              <h2>
                <FontAwesomeIcon icon={faPencilAlt} style={{}} />
              </h2>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
