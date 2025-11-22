import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AuthComponent from "../components/AuthLayout";

const AppRouter = () => {
    return (
        <Routes >
            <Route element={< AuthComponent />} >
                <Route path="/login" element={< Login />} />
                <Route path="/register" element={< Register />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
