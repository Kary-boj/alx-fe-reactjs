import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return <h2>User Profile: {id}</h2>;
}

export default UserProfile;
