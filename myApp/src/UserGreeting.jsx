import PropTypes from "prop-types";

const UserGreeting = ({userName = "Unknown", isLoggedIn =false}) => {  {/* Default values */}
  const isLoggedInStyle = {
    color: "white",
    padding: "20px",
    fontSize: "30px",
    fontWeight: "bold",
    backgroundColor: "Green",
    textAlign: "center",
  };

  const isLoggedOutStyle = {
    color: "white",
    padding: "20px",
    fontSize: "30px",
    fontWeight: "bold",
    backgroundColor: "Red",
    textAlign: "center",
  };

  const isLoggedInMessage = <h2 style={isLoggedInStyle}>Welcome {userName}</h2>;
  const isLoggedOutMessage = <h2 style={isLoggedOutStyle}>Please Login {userName}</h2>;

  return isLoggedIn ? isLoggedInMessage : isLoggedOutMessage;
};

UserGreeting.propTypes = {
  userName: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};


export default UserGreeting;