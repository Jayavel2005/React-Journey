import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";

const Login = ({ setPage }) => {
    const userDetails = { email: "", password: "" };
    const storedUserDetails = { storedUserEmail: "", storedPassword: "" };

    const [user, setUser] = useState(userDetails);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [storedUser, setStoredUser] = useState(storedUserDetails);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user")) || {};
        setStoredUser({
            storedUserEmail: storedUser.userEmail || "",
            storedPassword: storedUser.userPassword || ""
        });
        setUser({
            email: storedUser.userEmail || "",
            password: storedUser.userPassword || ""
        });
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail(user.email);
        const isPasswordValid = validatePassword(user.password);

        if (!isEmailValid || !isPasswordValid) return;


        if (user.email === storedUser.storedUserEmail && user.password === storedUser.storedPassword) {
            setEmailErrorMessage("");
            setPasswordErrorMessage("");
            
            setPage("Home")
        } else {
            if (user.email !== storedUser.storedUserEmail) setEmailErrorMessage("Email is incorrect.");
            if (user.password !== storedUser.storedPassword) setPasswordErrorMessage("Password is incorrect.");
        }
    };

    const handleChangeEmail = (event) => {
        const newEmail = event.target.value;
        setUser(prevUser => ({ ...prevUser, email: newEmail }));
        validateEmail(newEmail)
    };

    const handleChangePassword = (event) => {
        const newPassword = event.target.value;
        setUser(prevUser => ({ ...prevUser, password: newPassword }));
        validatePassword(newPassword)
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!email.trim()) return setErrorMessage(setEmailErrorMessage, "Email is required.");
        if (!emailRegex.test(email)) return setErrorMessage(setEmailErrorMessage, "Enter a valid email address");
        if (email !== email.toLowerCase()) return setErrorMessage(setEmailErrorMessage, "Email should be in lowercase only.");
        setEmailErrorMessage("");
        return true;
    };

    const validatePassword = (password) => {
        if (!password) return setErrorMessage(setPasswordErrorMessage, "Password is required.");
        if (password.length < 8) return setErrorMessage(setPasswordErrorMessage, "Minimum 8 characters required");
        if (!/[A-Z]/.test(password)) return setErrorMessage(setPasswordErrorMessage, "Password must contain at least one uppercase letter");
        if (!/[a-z]/.test(password)) return setErrorMessage(setPasswordErrorMessage, "Password must contain at least one lowercase letter");
        if (!/[^A-Za-z0-9]/.test(password)) return setErrorMessage(setPasswordErrorMessage, "Password must contain at least one special character");
        setPasswordErrorMessage("");
        return true;
    };

    const setErrorMessage = (setter, message) => {
        setter(message);
        setTimeout(() => setter(""), 3000);
        return false;
    };

    const changePageState = () => {
        setPage("SignUp");
    };

    return (
        <div>
            <form className="login--main">
                <h1>Login</h1>
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
                    <span className="informative--message" style={{ color: "red", display: emailErrorMessage ? "block" : "none" }}>
                        {emailErrorMessage}
                    </span>
                </div>
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
                    <span className="informative--message" style={{ color: "red", display: passwordErrorMessage ? "block" : "none" }}>
                        {passwordErrorMessage}
                    </span>
                </div>
                <div className="form--group">
                    <button className="login--button" onClick={handleLogin}>Login</button>
                    <span className="signup--link">
                        Don't have an account?
                        <a href="#" className="signupPage--link" onClick={changePageState}>Create account</a>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;
