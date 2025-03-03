import PropTypes from "prop-types";
import Button from "./Button/Button.jsx";


const Student = (props) => {

    const studentStyle = {
        backgroundColor: "rgb(93, 223, 255)",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "30px",
        margin: "10px",
        cursor: "pointer",
        display: "inline-block"
    }
    const buttonStyle = {
       display :"flex",
       justifyContent : "center",
       alignItems : "center",
       gap : "10px",
       backgroundColor : "purple",
       padding : "10px",
       borderRadius : "5px",
       
        
    }

    const { name, age, course, isStudent } = props;

    return (
        <div style={studentStyle}>
            <p>Student Name : {name}</p>
            <p>Student Age : {age}</p>
            <p>Student Course : {course}</p>
            <p>Student Is Student : {isStudent ? "Yes" : "No"}</p>
            <div style={buttonStyle}>
                <Button />
                <Button />
            </div>
        </div>
    );
}
Student.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    course : PropTypes.string.isRequired,
    isStudent : PropTypes.bool.isRequired
}

Student.defaultProps = {
    name : "Unknown",
    age : 0,
    course : "Unknown",
    isStudent : false
}

export default Student;