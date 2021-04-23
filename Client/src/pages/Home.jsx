import React, { useEffect, useState, useContext } from "react";
import Profile from "./../components/Profile";
import axios from "axios";
import { UserContext } from "./../context/userContext";

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  const user = useContext(UserContext);

  useEffect(() => {
    // const config = {
    //   headers: {
    //     Authorization: localStorage.getItem("token"),
    //   },
    // };

    // axios
    //   .get(`http://localhost:8080/api/users/${userId}`, config)
    //   // .get(`http://localhost:8080/api/users/1`, config)
    //   .then((res) => {
    //     console.log(res.data.user[0]);
    //     setUser(res.data.user[0]);
    //     setLoading(false);
    //   })
    //   .catch((err) => console.log(err));

    user ? setLoading(false) : setLoading(true);
  }, [loading]);

  return <div>{loading ? "Loading..." : <Profile data={user} />}</div>;
};

export default Home;
