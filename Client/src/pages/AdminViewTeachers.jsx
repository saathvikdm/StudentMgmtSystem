import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./../context/userContext";
import { Link } from "react-router-dom";

const AdminViewTeachers = () => {
  const [loading, setLoading] = useState(true);
  const [teachers, setTeachers] = useState(null);
  const user = useContext(UserContext);

  //   const { ssid } = user.user.Semsec;
  //   console.log(ssid);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(`http://localhost:8080/api/teachers`, config)
      .then((res) => {
        console.log(res.data.user);
        setTeachers(res.data.user);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="view-students">
      <div className="row py-3">
        <h1 className="display-4 col-10" style={{ color: "white" }}>
          View All Teachers
        </h1>
        <Link to="/" className="col-2 pt-3">
          <button className="btn btn-primary">{`<< Back`}</button>
        </Link>
      </div>
      <ul>
        <li className="list-group-item active mt-3">{`Teachers: ${
          loading ? "loading..." : Object.keys(teachers).length
        }`}</li>
        {loading
          ? "loading..."
          : teachers.map(({ uuid, firstname, lastname, sno, marks }, i) => (
              <div>
                <li key={uuid} className="list-group-item">
                  {`${firstname} ${lastname} [${sno}]
                        `}
                </li>
              </div>
            ))}
      </ul>
    </div>
  );
};

export default AdminViewTeachers;
