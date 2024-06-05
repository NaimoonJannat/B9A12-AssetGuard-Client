import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="w-full">
                <span className="loading w-1/3 mx-auto text-[#57A6A1] loading-dots"></span>
            </div>
        );
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
        return (
            <div className="w-full">
                <span className="loading w-1/3 mx-auto text-[#57A6A1] loading-dots"></span>
            </div>
        );
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
        return (
            <div className="w-full">
                <span className="loading w-1/3 mx-auto text-[#57A6A1] loading-dots"></span>
            </div>
        );
    }

    if (user && role === 'employee') {
        return children;
    }

    return <Navigate state={{ from: location }} to="/" />;
};

export { PrivateRoute, AdminRoute, EmployeeRoute };
