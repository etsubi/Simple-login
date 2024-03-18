import React from "react";

function WelcomePage({ username, setLogout }) {
    const handleLogout = () => {
        setLogout(); 
    };

    return (
        <div className="welcome">
            <h2>Welcome, {username}!</h2>
            <button onClick={handleLogout} className="welcome-btn">Logout</button>
        </div>
    );
}

export default WelcomePage;
