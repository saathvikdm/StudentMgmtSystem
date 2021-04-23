import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./../context/userContext";
import { Link } from "react-router-dom";

const UpdateScore = () => {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);
  const [score, setScore] = useState(null);
  const [editView, setEditView] = useState(false);
  const [subcode, setSubcode] = useState(null);
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState(null);
  const [m3, setM3] = useState(null);
  const user = useContext(UserContext);
  const { ssid } = user.user.Semsec;

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

  return (
    <div className="update-score">
      <div className="row py-3">
        <h1 className="display-4 col-10" style={{ color: "white" }}>
          Update Student Scores
        </h1>
        <Link to="/" className="col-2 pt-3">
          <button className="btn btn-primary">{`<< Back`}</button>
        </Link>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4 my-4">
          <ul className="list-group">
            <li className="list-group-item active">{`Class: ${ssid}, Students: ${
              loading ? "loading..." : Object.keys(students).length
            }`}</li>
            {loading
              ? "loading..."
              : students.map(({ uuid, firstname, lastname, sno, marks }, i) => (
                  <div>
                    <li
                      key={uuid}
                      className="list-group-item"
                      onClick={() => showMarks(i, marks)}
                    >
                      {`${firstname} ${lastname} [${sno}] 
                    `}
                      <ul
                        style={
                          active === i ? { display: "" } : { display: "none" }
                        }
                      >
                        <li style={{ listStyleType: "none" }}>
                          <span
                            style={{ margin: "1px" }}
                            className="badge bg-dark"
                          >
                            Subject
                          </span>
                          <span
                            style={{ margin: "1px" }}
                            className="badge bg-dark"
                          >
                            Final IA
                          </span>
                        </li>
                        {marks.map(({ id, subcode, finalIa }) => {
                          return (
                            <li key={id}>{`${subcode}: ${Math.round(
                              finalIa
                            )}`}</li>
                          );
                        })}
                        <button
                          className="mt-2 btn btn-warning"
                          onClick={buttonClick}
                        >
                          Edit Marks
                        </button>
                      </ul>
                    </li>
                  </div>
                ))}
          </ul>
        </div>
        <div
          className="col-12 col-md-8 update-score-div"
          style={editView ? { display: "" } : { display: "none" }}
        >
          {!score
            ? ""
            : score.map(
                ({ id, subcode, test1, test2, test3, finalIa, userID }) => {
                  return (
                    <div>
                      {/* <li key={id}>{`${subcode}: ${test1} ${test2} ${test3}`}</li> */}
                      <form onSubmit={(e) => handleSubmit(e, subcode, userID)}>
                        <label className="mx-2">{subcode}: </label>
                        <input
                          type="text"
                          id="test1"
                          name="test1"
                          // value={m1}
                          placeholder={test1 || null}
                          style={{ width: "50px" }}
                          className="mx-1"
                          onChange={(e) => setM1(e.target.value)}
                        />
                        <input
                          type="text"
                          id="test2"
                          name="test2"
                          // value={test2 || null}
                          placeholder={test2 || null}
                          style={{ width: "50px" }}
                          className="mx-1"
                          onChange={(e) => setM2(e.target.value)}
                        />
                        <input
                          type="text"
                          id="test3"
                          name="test3"
                          // value={test3 || null}
                          placeholder={test3 || null}
                          style={{ width: "50px" }}
                          className="mx-1"
                          onChange={(e) => setM3(e.target.value)}
                        />
                        <button
                          type="submit"
                          className="mx-2 my-1 btn btn-dark"
                          // onClick={setSubcode(subcode)}
                        >
                          Update Marks
                        </button>
                      </form>
                    </div>
                  );
                }
              )}
        </div>
      </div>
    </div>
  );
};

export default UpdateScore;
