import Student from "./Student";
import Teacher from "./Teacher";
import Admin from "./Admin";

const Profile = (props) => {
  const { type } = props.data.user;

  switch (type) {
    case "1":
      return <Admin data={props.data.user} />;
      break;
    case "2":
      return <Teacher data={props.data.user} />;
      break;
    case "3":
      return <Student data={props.data.user} />;
      break;
    default:
    // code block
  }
};

export default Profile;
