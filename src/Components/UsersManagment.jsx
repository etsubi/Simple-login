import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import WelcomePage from "./WelcomePage";

function UsersManagment() {
    const [loginsignup, setLoginSignUp] = useState(true);
    const [username, setUsername] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        if (storedUsers) {
            setUsers(storedUsers);
        }
    }, []);

    const handleLoginSignUp = () => {
        setLoginSignUp(!loginsignup);
    };

    const setLogout = () => {
        setUsername("");
        setLoginSignUp(true); // Reset to sign-in page after logout
    };

    const handleLogin = (username, password) => {
        const user = users.find((user) => user.username === username);
        if (user) {
            if (user.password === password) {
                setUsername(username);
            } else {
                alert("Incorrect Password");
            }
        } else {
            alert("Incorrect User");
        }
    };

    const handleSignUp = (username, password) => {
        const newUser = { username, password };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUsername(username);
        alert("New User Created");
    };

    return (
        <div>
            {username !== "" ? (
                <WelcomePage username={username} setLogout={setLogout} />
            ) : (
                loginsignup ? (
                    <SignIn handleLogin={handleLogin} handleLoginSignUp={handleLoginSignUp} />
                ) : (
                    <SignUp handleLoginSignUp={handleLoginSignUp} handleSignUp={handleSignUp} />
                )
            )}
        </div>
    );
}

export default UsersManagment;
