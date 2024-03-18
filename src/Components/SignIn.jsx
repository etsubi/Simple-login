import React, { useState } from "react";
import "./SignIn.css";

function SignIn(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignInClick = () => {
        props.handleLogin(username, password);
    };

    const handleCreateAccountClick = () => {
        props.handleLoginSignUp();
    };

    const handleSignIn = () => {
        handleSignInClick();
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
            <button className="button" onClick={handleSignIn}> Sign In </button>
            <button className="button" onClick={handleCreateAccountClick}>Create an account</button>
        </div>
    );
}

export default SignIn;
