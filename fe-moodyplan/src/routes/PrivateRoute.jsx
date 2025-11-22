import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const isAuthenticated = false; // TẠM thời để test

    return isAuthenticated ? children : <Navigate to="/login" replace />;
}
