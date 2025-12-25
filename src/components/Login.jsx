import { useState } from "react";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.emailOrPhone || !formData.password) {
      setError("All fields are required");
      return;
    }

    setError("");
    console.log("Login Data:", formData);

    
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="title">One account. Access all services.</h2>
        <p className="subtitle">Sign in to access your account</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email / Phone"
            className="input"
            value={formData.emailOrPhone}
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

          <div className="options">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              <span>Keep me signed in</span>
            </label>

            <a href="#" className="link">
              Forgot Password?
            </a>
          </div>

          {error && (
            <p style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}>
              {error}
            </p>
          )}

          <button type="submit" className="btn-signin">
            Sign In
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <p className="google-login">
          Sign in with <span>Google</span> or other IDPs
        </p>

        <p className="signup">
          Don’t have an account? <a href="#">Sign Up Now</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
