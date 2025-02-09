import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get('http://localhost:5001/api/auth/protected', { withCredentials: true });
                setIsAuthenticated(true);
            } catch {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) return <p>Loading...</p>;

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
