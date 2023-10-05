import React, { useState } from "react";
import "./SignupPage.css";
import poster2 from "../../images/girl.png";
import poster1 from "../../images/naruto.png";

const SignupPage = () => {
  const [signIn, setSignIn] = useState(false);

  // function checkRegister(val) {
  //   if (val === "Register") setSignIn(false);
  // }
  // function checkLogin(val) {
  //   if (val === "Login") setSignIn(true);
  // }
  return (
    <div className="SignupPage-div">
      
      <div className="form-section">
        <div className="forms">
          {signIn ? (
            <form id="form">
              <h2>Welcome Back!!</h2>
              <span>Sign in and Enjoy shopping</span>
              <br></br>
              <input type="text" placeholder="Username"></input>
              <input type="password" placeholder="Password"></input>
              <input type="password" placeholder="confirm password"></input>
              <input type="email" placeholder="E-mail"></input>

              <button className="form-btn">Register</button>
              <span
                onClick={(e) => {
                  setSignIn(false);
                }}
                className="login-btn"
              >
                Login
              </span>
            </form>
          ) : (
            <form id="form">
              <h2>Hey there!!</h2>
              <span>A new customer Huh!</span>
              <br></br>
              <input type="text" placeholder="Username"></input>
              <input type="password" placeholder="Password"></input>

              <button className="form-btn">Login</button>
              <span
                onClick={(e) => {
                  setSignIn(true);
                }}
                className="register-btn"
              >
                Register
              </span>
            </form>
          )}
        </div>
        <div className="poster-div">
          {
            signIn?
            <img src={poster1} alt="Naruto-poster"></img>
            :
            <img src={poster2} alt="Girl-poster"></img>
          }
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
