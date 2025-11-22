import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const formRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        };
        const handleKeyDown = (e) => {
            if (e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0")) {
                e.preventDefault();
            }
        };

        const formEl = formRef.current;
        if (formEl) {
            formEl.addEventListener("wheel", handleWheel, { passive: false });
            formEl.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            if (formEl) {
                formEl.removeEventListener("wheel", handleWheel);
                formEl.removeEventListener("keydown", handleKeyDown);
            }
        };
    }, []);


    return (
        <div className="auth-form page-transition">
            <h2 className="form-title">Đăng nhập</h2>
            <form>
                <div className="form-group">
                    <label className="label">Email</label>
                    <input
                        type="email"
                        placeholder="Nhập email"
                        className="input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="label">Mật khẩu</label>
                    <div className="password-input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Nhập mật khẩu"
                            className="input"
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>

                <div className="forgot-password">
                    <a href="/forgot-password">Quên mật khẩu?</a>
                </div>

                <button type="submit" className="auth-button">
                    Đăng nhập
                </button>
            </form>

            <div className="sign-in-other">
                <div className="divider-wrapper">
                    <span className="line"></span>
                    <span className="text">HOẶC</span>
                    <span className="line"></span>
                </div>
                <div className="social-buttons">
                    <button className="social-button google"><FcGoogle /> Đăng nhập bằng Google</button>
                </div>
            </div>

            <div className="no-account">
                <span>Bạn chưa có tài khoản? </span>
                <Link to="/register">Đăng ký</Link>
            </div>
        </div>
    );
};

export default Login;