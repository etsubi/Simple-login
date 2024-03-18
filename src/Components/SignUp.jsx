import React, { useState } from "react";
import "./SignIn.css";

function SignUp(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        props.handleSignUp(username, password);
    };

    const handleSignInClick = () => {
        props.handleLoginSignUp();
    };

    return (
        <div className="container">
            <input
                type="text"
                className="input-field"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            <input
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <input
                type="password"
                className="input-field"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />
            <button className="button" onClick={handleSignUp}>
                Sign Up
            </button>
            <button className="button" onClick={handleSignInClick}>
                Already have an account
            </button>
        </div>
    );
}

export default SignUp;
