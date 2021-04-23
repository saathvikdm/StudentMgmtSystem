import React, { useContext, useState, useEffect } from "react";
import Default from "../assets/default.jpg";
import { UserContext } from "./../context/userContext";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const About = () => {
  const userContext = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [uname, setUname] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    setUser(userContext.user);
    // console.log(user);
    user ? setLoading(false) : setLoading(true);
  }, [user]);

  //   const { firstname, lastname, sno, dept } = user;

  const handleSubmit = (e) => {
    const id = user.id;
    const data = {
      firstname: fname,
      lastname: lname,
      username: uname,
      email,
    };
    // e.preventDefault();
    // console.log(data);

    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .put(`http://localhost:8080/api/users/${user.id}`, data, config)
      .then((res) => {
        console.log(res.data);
        // alert("Details Updated");
      })
      .catch((err) => console.log(err));
  };

  const getUserType = (type) => {
    switch (type) {
      case "1":
        return "Admin Profile";
        break;
      case "2":
        return "Admin Profile";
        break;
      case "3":
        return "Student Profile";
        break;
      default:
        return "N/A";
      // code block
    }
  };

  return (
    <div className="my-5 row">
      {loading ? (
        "loading"
      ) : (
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
                <h5 className="card-title">{getUserType(user.type)}</h5>
                <h1 className="card-text">{`${user.firstname} ${user.lastname}`}</h1>
                <h4>{`SSN: ${user.sno}`}</h4>
                <p className="card-text">
                  {user.type == 1 ? "" : `Department: ${user.dept.dept_name}`}
                </p>
                <p className="card-text">
                  {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Link to="/" className="col-2 pt-3">
        <button className="btn btn-primary">{`<< Back`}</button>
      </Link>
      <div className="col-12 col-md-6 about-text">
        <h3>Update Profile</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
