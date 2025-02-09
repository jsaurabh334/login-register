import React from 'react';
import axios from 'axios';

const Dashboard = () => {
    const handleLogout = async () => {
        await axios.post('http://localhost:5001/api/auth/logout', {}, { withCredentials: true });
        window.location = '/';
    };

    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
