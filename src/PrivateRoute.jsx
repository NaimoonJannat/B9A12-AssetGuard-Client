import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "./Shared/Pages/LoadingSpinner";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" />;
};

const AdminRoute = ({ children }) => {
    const { user, loading, role } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (user && role === 'hr') {
        return children;
    }

    return <Navigate state={{ from: location }} to="/" />;
};

const EmployeeRoute = ({ children }) => {
    const { user, loading, role } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (user && role === 'employee') {
        return children;
    }

    return <Navigate state={{ from: location }} to="/" />;
};

export { PrivateRoute, AdminRoute, EmployeeRoute };
