import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AuthComponent from "../components/AuthLayout";
import ForgotPassword from "../pages/auth/ForgotPassword ";
import Verification from "../pages/auth/Verification";
import ResetPassword from "../pages/auth/ResetPassword";

const AppRouter = () => {
    return (
        <Routes >
            <Route element={< AuthComponent />} >
                <Route path="/login" element={< Login />} />
                <Route path="/register" element={< Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/verify-otp" element={<Verification />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
