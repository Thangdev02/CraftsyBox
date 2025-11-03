import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { register } from "../../api/auth";
import "./Register.css";

const Register = () => {
    const [form, setForm] = useState({
        userName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === "phoneNumber") {
            const value = e.target.value.replace(/\D/g, "");
            if (value.length > 10) return;
            setForm({ ...form, phoneNumber: value });
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
        setError("");
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@!@#$%^&*])[A-Za-z\d@!@#$%^&*]{8,}$/;
        return regex.test(password);
    };

    const validatePhone = (phone) => {
        return /^\d{10}$/.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!form.userName || !form.email || !form.password || !form.phoneNumber) {
            setError("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (!validatePassword(form.password)) {
            setError("Mật khẩu phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường và ký tự đặc biệt (@!@#$%^&*).");
            return;
        }

        if (!validatePhone(form.phoneNumber)) {
            setError("Số điện thoại phải gồm đúng 10 chữ số.");
            return;
        }

        setLoading(true);
        try {
            const res = await register(form);
            if (res && (res.statusCode === 200 || res.statusCode === 201)) {
                navigate("/login");
            } else {
                setError(res?.message || "Đăng ký thất bại!");
            }
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError("Có lỗi xảy ra. Vui lòng thử lại!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-bg">
            <div className="login-container position-relative">
                <div className="login-shape login-shape-1"></div>
                <div className="login-shape login-shape-2"></div>
                <div className="login-shape login-shape-3"></div>

                <h2 className="login-title">Đăng Ký Tài Khoản</h2>
                <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
                    <label htmlFor="userName">Tên đăng nhập</label>
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        placeholder="Nhập tên đăng nhập"
                        value={form.userName}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Nhập email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="password">Mật khẩu</label>
                    <div className="password-field">
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Nhập mật khẩu"
                            value={form.password}
                            onChange={handleChange}
                        />
                        <span
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                        </span>
                    </div>
                    <div style={{ fontSize: 13, color: "#1976d2", marginBottom: 8 }}>
                        Mật khẩu phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường và ký tự đặc biệt (@!@#$%^&*).
                    </div>

                    <label htmlFor="phoneNumber">Số điện thoại</label>
                    <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        placeholder="Nhập số điện thoại"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        maxLength={10}
                        inputMode="numeric"
                        pattern="\d*"
                    />

                    {error && (
                        <div style={{ color: "#e74c3c", marginBottom: 8, fontSize: "14px" }}>{error}</div>
                    )}

                    <button className="login-btn" type="submit" disabled={loading}>
                        {loading ? "Đang đăng ký..." : "Đăng Ký"}
                    </button>
                </form>

                <a className="login-link" href="/login">
                    Đã có tài khoản? Đăng nhập
                </a>
            </div>
        </div>
    );
};

export default Register;