import React from "react";
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
import { Link } from "react-router-dom";

const Teachernav = (props) => {
  return (
    <li>
      <a style={{ paddingLeft: "28px", paddingRight: "27px" }}>
        <span>
          Manage Students
          <FontAwesomeIcon icon={faUsers} style={{ float: "right" }} />
        </span>
      </a>
      <ul className="nav-flyout">
        <li>
          <Link to={props.data ? "/viewstudents" : "/login"} exact>
            View Students
            <FontAwesomeIcon icon={faEye} style={{ float: "right" }} />
          </Link>
        </li>
        <li>
          <Link to={props.data ? "/updatescore" : "/login"} exact>
            Update Scores
            <FontAwesomeIcon icon={faPencilAlt} style={{ float: "right" }} />
          </Link>
        </li>
        <li>
          <Link to={props.data ? "/addUser" : "/login"} exact>
            Add Student
            <FontAwesomeIcon icon={faUserPlus} style={{ float: "right" }} />
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Teachernav;
