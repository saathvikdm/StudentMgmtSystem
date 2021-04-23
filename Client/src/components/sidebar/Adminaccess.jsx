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

const Adminaccess = (props) => {
  return (
    <li>
      <a style={{ paddingLeft: "28px", paddingRight: "27px" }}>
        <span>
          Manage
          <FontAwesomeIcon icon={faUsers} style={{ float: "right" }} />
        </span>
      </a>
      <ul className="nav-flyout">
        <li>
          <Link to={props.data ? "/adminviewteachers" : "/login"} exact>
            View Teachers
            <FontAwesomeIcon icon={faEye} style={{ float: "right" }} />
          </Link>
        </li>
        <li>
          <Link to={props.data ? "/adminviewstudents" : "/login"} exact>
            View Students
            <FontAwesomeIcon icon={faEye} style={{ float: "right" }} />
          </Link>
        </li>
        <li>
          <Link to={props.data ? "/addUser" : "/login"} exact>
            Add User
            <FontAwesomeIcon icon={faUserPlus} style={{ float: "right" }} />
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Adminaccess;
