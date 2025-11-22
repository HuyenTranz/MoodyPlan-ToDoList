import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }

        console.log("New password:", password);
        // Gọi API để reset mật khẩu
    };

    return (
        <div className="auth-form page-transition">
            <h2 className="form-title">Đặt lại mật khẩu</h2>
            <p className="instruction">Nhập mật khẩu mới của bạn</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label">Mật khẩu mới</label>
                    <div className="password-input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Nhập mật khẩu mới"
                            className="input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>

                <div className="form-group">
                    <label className="label">Xác nhận mật khẩu</label>
                    <div className="password-input-wrapper">
                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Nhập lại mật khẩu"
                            className="input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={() => setShowConfirm(!showConfirm)}
                        >
                            {showConfirm ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>

                <button type="submit" className="auth-button">
                    Xác nhận
                </button>
            </form>

            <div className="no-account" style={{ marginTop: 20 }}>
                <span>Quay lại đăng nhập? </span>
                <Link to="/login">Đăng nhập</Link>
            </div>
        </div>
    );
};

export default ResetPassword;
