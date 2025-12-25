import { useState } from "react";
import "./signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log("Signup Data:", formData);

    // 👉 Later: API call here
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="title">Create your account</h2>
        <p className="subtitle">Sign up to access all services</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {error && <p style={{ color: "red", fontSize: "13px" }}>{error}</p>}

          <button type="submit" className="btn-signin">
            Sign Up
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <p className="google-login">
          Sign up with <span>Google</span> or other IDPs
        </p>

        <p className="signup">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
