import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";
import backgroundImage from "./car1.jpg";
import passwordIcon from "./pashide.png";
import { Link } from 'react-router-dom';
function LoginForm1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setRedirect(true);
  };

  const handleToggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  if (redirect) {
    return <Redirect to="/mainproject" />;
  }

  return (
    <div className="login-container">
      <div className="background-container">
        <img src={backgroundImage} alt="background" />
      </div>
      <div className="form-container">
        <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={passwordIcon}
                alt="password toggle"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </label>
          <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
        </form>
        <div className="signup-toggle" onClick={handleToggleSignUp}>
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </div>
      </div>
    </div>
  );
}

export default LoginForm1;
