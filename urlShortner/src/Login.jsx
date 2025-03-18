import React, { useState } from "react";

const Login = () => {
    const userDetails = {
        email: "",
        password: "",
    };

    const [user, setUser] = useState(userDetails);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [page, setPage] = useState("Login")



    const handleLogin = (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail(user.email);
        const isPasswordValid = passwordValidator(user.password);

        if (!isEmailValid || !isPasswordValid) {
            return; // Stop execution if validation fails
        }



        // Reset error messages and styles
        setEmailErrorMessage("");

        setPasswordErrorMessage("");

        alert("Logged in Successfully!")
    };

    const handleChangeEmail = (event) => {
        const newEmail = event.target.value;
        setUser((prevUser) => ({
            ...prevUser,
            email: newEmail,
        }));
        validateEmail(newEmail);
    };

    const handleChangePassword = (event) => {
        const newPassword = event.target.value;
        setUser((prevUser) => ({ ...prevUser, password: newPassword }));
        passwordValidator(newPassword);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (email.trim() === "") {
            setEmailErrorMessage("Email is required.");
            setTimeout(() => {
                setEmailErrorMessage("");
            }, 3000);

            return false;
        }

        else if (!emailRegex.test(email)) {
            setEmailErrorMessage("Enter a valid email address");
            setTimeout(() => {
                setEmailErrorMessage("");
            }, 3000);
            return false;
        }
        else if (email !== email.toLowerCase()) {
            setEmailErrorMessage("Email should be in lowercase only.");
            setTimeout(() => {
                setEmailErrorMessage("");
            }, 3000);
            return false;
        }



        // Reset error if valid
        else {
            setEmailErrorMessage("");

            return true;
        }
    };

    const passwordValidator = (password) => {

        if (password === "") {
            setPasswordErrorMessage("Password is required.");
            setTimeout(() => {
                setPasswordErrorMessage("");
            }, 3000);

            return false;
        }
        else if (password.length < 8) {
            setPasswordErrorMessage("Minimum 8 characters required");
            setTimeout(() => {
                setPasswordErrorMessage("");
            }, 3000);
            return false;
        } else if (!/[A-Z]/.test(password)) {
            setPasswordErrorMessage("Password must contain at least one uppercase letter");
            setTimeout(() => {
                setPasswordErrorMessage("");
            }, 3000);
            return false;
        } else if (!/[a-z]/.test(password)) {
            setPasswordErrorMessage("Password must contain at least one lowercase letter");
            setTimeout(() => {
                setPasswordErrorMessage("");
            }, 3000);
            return false;
        } else if (!/[^A-Za-z0-9]/.test(password)) {
            setPasswordErrorMessage("Password must contain at least one special character");
            setTimeout(() => {
                setPasswordErrorMessage("");
            }, 3000);
            return false;
        }

        // Reset error if password is valid
        setPasswordErrorMessage("");

        return true;
    };


    const changePageState = () => {
        setPage("SignUp")
        console.log(page);

    }



    return (
        <div>
            <form className="login--main">
                <h1>Login</h1>

                {/* Email Input */}
                <div className="form--group">
                    <label htmlFor="Email" className="form--label">Email</label>
                    <input
                        type="text"
                        name="Email"
                        id="Email"
                        placeholder="Enter your email address"
                        value={user.email}
                        onChange={handleChangeEmail}
                        style={{ border: emailErrorMessage ? "1px solid red" : "1px solid #ccc" }}
                    />
                    <span
                        className="informative--message email--information"
                        style={{ color: "red", display: emailErrorMessage ? "block" : "none" }}>
                        {emailErrorMessage}
                    </span>
                </div>

                {/* Password Input */}
                <div className="form--group">
                    <label htmlFor="Password" className="form--label">Password</label>
                    <input
                        type="password"
                        name="Password"
                        id="Password"
                        placeholder="Enter your password"
                        value={user.password}
                        onChange={handleChangePassword}
                        style={{ border: passwordErrorMessage ? "1px solid red" : "1px solid #ccc" }}
                    />
                    <span
                        className="informative--message"
                        style={{ color: "red", display: passwordErrorMessage ? "block" : "none" }}>
                        {passwordErrorMessage}
                    </span>
                </div>

                {/* Login Button */}
                <div className="form--group">
                    <button className="login--button" onClick={handleLogin}>Login</button>
                    <span className="signup--link">
                        Don't have an account?
                        <a
                            href="#"
                            className="signupPage--link"
                            onClick={changePageState}
                        >Create account</a>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;
