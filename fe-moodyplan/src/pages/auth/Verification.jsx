import React, { useState } from "react";
import { Link } from "react-router-dom";

const Verification = () => {
    const [otp, setOtp] = useState(["", "", "", ""]); // 4 số OTP ví dụ

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d?$/.test(value)) { // chỉ nhập 1 chữ số
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // auto focus sang input tiếp theo
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("OTP entered:", otp.join(""));
        // Gửi OTP lên API để verify
    };

    return (
        <div className="auth-form page-transition">
            <h2 className="form-title">Xác thực OTP</h2>
            <p className="instruction">Nhập mã OTP đã gửi tới email của bạn</p>

            <form onSubmit={handleSubmit}>
                <div className="otp-input-wrapper">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                            className="otp-input"
                        />
                    ))}
                </div>

                <button type="submit" className="auth-button">
                    Xác nhận
                </button>
            </form>

            <div className="no-account" style={{ marginTop: 20 }}>
                <span>Không nhận được mã? </span>
                <Link to="/forgot-password">Gửi lại OTP</Link>
            </div>
        </div>
    );
};

export default Verification;
