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
import Adminaccess from "./Adminaccess";

const Adminnav = (props) => {
  return (
    <li>
      <Adminaccess data={props.data} />
    </li>
  );
};

export default Adminnav;
