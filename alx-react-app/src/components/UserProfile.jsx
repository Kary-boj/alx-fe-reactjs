// src/components/UserProfile.jsx
const UserProfile = (props) => {
    return (
      <div>
        <h2>{props.name}</h2> {/* Display the name */}
        <p>Age: {props.age}</p> {/* Display the age */}
        <p>Bio: {props.bio}</p> {/* Display the bio */}
      </div>
    );
  };
  
  export default UserProfile;
  