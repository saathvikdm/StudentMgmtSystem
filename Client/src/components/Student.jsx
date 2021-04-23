import React from "react";
import Default from "../assets/default.jpg";

const Student = (props) => {
  const { firstname, lastname, sno, dept, marks } = props.data;

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
              <h5 className="card-title">Student Profile</h5>
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
      <div className="row">
        {marks.map((item, i) => (
          <div className="col-4 my-2">
            <ul className="list-group">
              <li className="list-group-item active" key={item.id}>
                Subject: {item.subcode}
              </li>
              <li
                key={`${i}-${item.test1}`}
                className="list-group-item"
              >{`CIE 1: ${item.test1 || "N/A"}`}</li>
              <li
                key={`${i}-${item.test2}`}
                className="list-group-item"
              >{`CIE 2: ${item.test2 || "N/A"}`}</li>
              <li
                key={`${i}-${item.test3}`}
                className="list-group-item"
              >{`CIE 3: ${item.test3 || "N/A"}`}</li>
              <li
                key={`${i}-${item.finalIa}`}
                className="list-group-item"
              >{`AVG: ${item.finalIa || "N/A"}`}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
