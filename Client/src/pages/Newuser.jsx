import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./../context/userContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Newuser = () => {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("password");
  const [role, setRole] = useState("2");
  const [type, setType] = useState("3");
  const [sno, setSno] = useState(null);
  const [deptID, setdeptID] = useState(null);
  const [ssid, setSsid] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    const data = {
      firstname,
      lastname,
      username,
      email,
      password,
      role,
      type,
      sno,
      deptID: parseInt(deptID),
      ssid,
    };

    console.log(data);
    axios
      .post(`http://localhost:8080/api/users/create`, data, config)
      .then((res) => {
        console.log(res.data.user);
        alert(`Student ${firstname} ${lastname} added successfully!`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="newUserForm">
      <div className="row py-3">
        <h1 className="display-4 col-10" style={{ color: "white" }}>
          Add New User
        </h1>
        <Link to="/" className="col-2 pt-3">
          <button className="btn btn-primary">{`<< Back`}</button>
        </Link>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-1">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="form-label">UserName</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="form-label">USN</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setSno(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setdeptID(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="form-label">Class</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setSsid(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-lg btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newuser;
