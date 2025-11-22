import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    return (
        <div className="auth-form page-transition">
            <h2 className="form-title">Quên mật khẩu</h2>
            <form >
                <div className="form-group">
                    <label className="label">Email của bạn</label>
                    <input
                        type="email"
                        placeholder="Nhập email"
                        className="input"
                        required
                    />
                </div>

                <button type="submit" className="auth-button">
                    Gửi yêu cầu
                </button>
            </form>

            <div className="no-account" style={{ marginTop: 20 }}>
                <span>Đã nhớ mật khẩu? </span>
                <Link to="/login">Đăng nhập</Link>
            </div>
        </div>
    );
};

export default ForgotPassword;
