import React from "react";
import image from "../../assets/register.svg";
import GoogleIcon from "@mui/icons-material/Google";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src={image} alt="" />
      </div>
      <div className="login-right">
        <h1 className="login-header">Log In</h1>
        <form>
          <div className="floating-label-group">
            <input
              type="text"
              className="login-name"
              required
              autoCapitalize="true"
            />
            <span className="floating-label">Name</span>
          </div>

          <div className="floating-label-group">
            <input type="email" className="login-email" required />
            <span className="floating-label">Email</span>
          </div>

          <span className="forgot">Forgot password?</span>
          <button className="login-submit">Login</button>
        </form>
        <div class="container">
          <hr class="hr-text" data-content="or better continue with" />
        </div>
        <div className="login-google">
          <GoogleIcon /> Google
        </div>
      </div>
    </div>
  );
};

export default Login;
