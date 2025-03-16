import React from 'react';
import { useState } from 'react';

const SignUp = () => {

    const userDetails = {
        userName: "",
        userEmail: "",
        userPassword: "",
    }
    
    const [user, setUser] = useState(userDetails);
    const [nameErrorMessage, setNameErrorMessage] = useState("")

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
        }
        else if (newName.length < 2) {
            setNameErrorMessage("Name must be atleast 2 characters.")
        }
        else if (!/^[a-zA-Z\s]+$/.test(newName)) {
            setNameErrorMessage("Only letters and spaces are allowed.")
        }
        else {
            setNameErrorMessage("");
        }
    }


    return (
        <div>
            <form className="signup--main">
                <h1>Sign Up</h1>

                {/* Name input */}
                <div className="form--group">
                    <label htmlFor="Name" className="form--label">Name</label>
                    <input type="text" name='Name' id='Name' placeholder='Enter your name..'  onChange={handleChangeName} aria-live='polite'
                    style={{border : nameErrorMessage ? "1px solid red" : "1px solid #ccc"}} />
                    <span
                        className='informative--message'
                        style={{color: "red", display : nameErrorMessage ? "block" : "none"}}>
                        {nameErrorMessage}</span>
                </div>

                {/* Email Input */}

                <div className="form--group">
                    <label htmlFor="Email" className='form--label'>Email</label>
                    <input type="text" name='Email' id='Email' placeholder='Enter your email address'  />
                    <span className='informative--message'>Invalid Email</span>
                </div>

                {/* Password */}
                <div className="form--group">
                    <label htmlFor="Password" className="form--label">Password</label>
                    <input type="password" name="Password" id="Password" placeholder='Enter your password'  />
                    <span className='informative--message'>Invalid password</span>
                </div>

                {/* Sign Up button */}
                <div className="form--group">
                    <button className='signup--button'>Sign Up</button>
                    <span className='login--link'>Already have an account ? <a href="#">Login</a></span>
                </div>


            </form>
        </div>


    )
}

export default SignUp
