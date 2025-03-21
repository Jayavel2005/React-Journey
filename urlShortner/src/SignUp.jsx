
import { useState } from 'react';

const SignUp = ({ setPage }) => {

    const userDetails = {
        userName: "",
        userEmail: "",
        userPassword: "",
    }

    const [user, setUser] = useState(userDetails);
    const [nameErrorMessage, setNameErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");


    const pageState = () => {
        setPage("Login")
    }



    // Handling Name Changing
    const handleChangeName = (e) => {

        const newName = e.target.value;
        setUser((prevUser) => (
            { ...prevUser, userName: newName }
        ));

        validateName(newName)
    }
    // Handling Name validation
    const validateName = (newName) => {
        if (newName.trim() === "") {
            setNameErrorMessage("Name is requied.");
            setTimeout(() => {
                setNameErrorMessage("");
            }, 2000)
            return false;
        }
        else if (newName.length < 2) {
            setNameErrorMessage("Name must be atleast 2 characters.")
            setTimeout(() => {
                setNameErrorMessage("");
            }, 2000)
            return false;
        }
        else if (!/^[a-zA-Z\s]+$/.test(newName)) {
            setNameErrorMessage("Only letters and spaces are allowed.");
            setTimeout(() => {
                setNameErrorMessage("");
            }, 2000)
            return false;
        }
        else {
            setNameErrorMessage("");
        }
        return true;
    }

    // Handle Email Changing
    const handleChangeEmail = (e) => {
        const newEmail = e.target.value;
        setUser((prevUser) => (
            { ...prevUser, userEmail: newEmail }
        ));

        validateEmail(newEmail);

    }
    // Handling Email Validation
    const validateEmail = (newEmail) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (newEmail.trim() === "") {
            setEmailErrorMessage("Email is required.")
            setTimeout(() => {
                setEmailErrorMessage("")
            }, 2000);
            return false;

        }
        else if (!emailRegex.test(newEmail)) {
            setEmailErrorMessage("Enter a valid email address")
            setTimeout(() => {
                setEmailErrorMessage("")
            }, 2000);
            return false;
        }
        else if (newEmail !== newEmail.toLowerCase()) {
            setEmailErrorMessage("Email should be in lowercase only.")
            setTimeout(() => {
                setEmailErrorMessage("")
            }, 2000);
            return false;
        }
        else {
            setEmailErrorMessage("")
        }
        return true;
    }
    // Handle Change Password
    const handleChangePassword = (e) => {
        const newPassword = e.target.value;
        setUser((prevUser) =>
        (
            { ...prevUser, userPassword: newPassword }
        ))

        validatePassword(newPassword)
    }
    // Handling Password Validation
    const validatePassword = (newPassword) => {
        if (newPassword === "") {
            setPasswordErrorMessage("Password is required.")
            setTimeout(() => {
                setPasswordErrorMessage("");
            }, 2000)
            return false;
        }
        else if (newPassword.length < 8) {
            setPasswordErrorMessage("Minimum 8 characters required");
            setTimeout(() => {
                setPasswordErrorMessage("");
            }, 2000)
            return false;
        }
        else if (!/[A-Z]/.test(newPassword)) {
            setPasswordErrorMessage("Password must contain at least one uppercase letter");
            setTimeout(() => {
                setPasswordErrorMessage("");
            }, 2000)
            return false;

        }
        else if (!/[a-z]/.test(newPassword)) {
            setPasswordErrorMessage("Password must contain at least one lowercase letter");
            setTimeout(() => {
                setPasswordErrorMessage("");
            }, 2000)
            return false;
        }
        else if (!/[^A-Za-z0-9]/.test(newPassword)) {
            setPasswordErrorMessage("Password must contain at least one special character");
            setTimeout(() => {
                setPasswordErrorMessage("");
            }, 2000)
            return false;

        }


        else {
            setPasswordErrorMessage("");
        }
        return true;
    }

    // Handling SignUp 
    const handleSignUp = (e) => {
        e.preventDefault();
        const isName = validateName(user.userName);
        const isEmail = validateEmail(user.userEmail);
        const isPassword = validatePassword(user.userPassword);

        console.log(`Name : ${isName}, Password : ${isEmail} Password : ${isPassword}`);
        if (!isName || !isEmail || !isPassword) {
            return;
        }

        setNameErrorMessage("");
        setEmailErrorMessage("");
        setPasswordErrorMessage("");
        alert("SignUp Successfully!")
        setPage("Home");
        localStorage.setItem("user", JSON.stringify(user));


    }

    return (
        <div>
            <form className="signup--main">
                <h1>Sign Up</h1>

                {/* Name input */}
                <div className="form--group">
                    <label htmlFor="Name" className="form--label">Name</label>
                    <input type="text" name='Name' id='Name' placeholder='Enter your name..' onChange={handleChangeName} aria-live='polite'
                        style={{ border: nameErrorMessage ? "1px solid red" : "1px solid #ccc" }} />
                    <span
                        className='informative--message'
                        style={{ color: "red", display: nameErrorMessage ? "block" : "none" }}>
                        {nameErrorMessage}</span>
                </div>

                {/* Email Input */}

                <div className="form--group">
                    <label htmlFor="Email" className='form--label'>Email</label>
                    <input
                        type="text"
                        name='Email'
                        id='Email'
                        placeholder='Enter your email address'
                        onChange={handleChangeEmail}
                        style={{ border: emailErrorMessage ? "1px solid red" : "1px solid #ccc" }}
                    />
                    <span
                        className='informative--message'
                        style={{ color: "red", display: emailErrorMessage ? "block" : "none" }}
                    >{emailErrorMessage}</span>
                </div>

                {/* Password */}
                <div className="form--group">
                    <label htmlFor="Password" className="form--label">Password</label>
                    <input
                        type="password"
                        name="Password"
                        id="Password"
                        placeholder='Enter your password'
                        onChange={handleChangePassword}
                        style={{ border: passwordErrorMessage ? "1px solid red" : "1px solid #ccc" }} />
                    <span
                        className='informative--message'
                        style={{ color: 'red', display: passwordErrorMessage ? "block" : "none" }}>

                        {passwordErrorMessage}
                    </span>
                </div>

                {/* Sign Up button */}
                <div className="form--group">
                    <button className='signup--button' onClick={handleSignUp}>Sign Up</button>
                    <span className='login--link'>Already have an account ? <a href="#" onClick={pageState}>Login</a></span>
                </div>


            </form>
        </div>


    )
}

export default SignUp
