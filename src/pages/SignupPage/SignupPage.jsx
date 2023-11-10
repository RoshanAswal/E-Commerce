import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import styles from './SignupPage.module.css';
import poster2 from "../../images/girl.png";
import poster1 from "../../images/naruto.png";
import axios from "axios";

const SignupPage = () => {
  const [signIn, setSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [_, setCookie] = useCookies(["access_token"]);
  const naviagte = useNavigate();

  const loginFunction =async (e) => {
    e.preventDefault();
    try {
      const response =await axios.post("https://e-commerce-backend-pearl.vercel.app/auth/login", {
        username: username,
        password: password,
      });

      if (response === null) {
        window.alert("Wrong credentials");
      } else {
        setCookie("access_token", response.data.token);
        window.localStorage.setItem("userId", response.data.userId);

        naviagte("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const registerFunction =async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        window.alert("Both passwords should match");
      } else {
        const response =await axios.post("https://e-commerce-backend-pearl.vercel.app/auth/register", {
          username: username,
          password: password,
          email: email,
        });
        window.alert(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.SignupPageDiv}>
      <div className={styles.formSection}>
        <div className={styles.posterDiv}>
          {signIn ? (
            <img src={poster1} alt="Naruto-poster"></img>
          ) : (
            <img src={poster2} alt="Girl-poster"></img>
          )}
        </div>
        <div className={styles.forms}>
          {signIn ? (
            <form id={styles.form}>
              <h2>Hey there!!</h2>
              <span>A new customer Huh!</span>
              <br></br>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <input
                type="password"
                placeholder="confirm password"
                name="confirm password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              ></input>
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>

              <button className={styles.formBtn} onClick={e=>{registerFunction(e)}}>
                Register
              </button>
              <span
                onClick={(e) => {
                  setSignIn(false);
                }}
                className={styles.loginBtn}
              >
                Login
              </span>
            </form>
          ) : (
            <form id={styles.form}>
              <h2>Welcome Back!!</h2>
              <span>Sign in and Enjoy shopping</span>

              <br></br>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
            
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>

              <button className={styles.formBtn} onClick={e=>{loginFunction(e)}}>
                Login
              </button>
              <span
                onClick={(e) => {
                  setSignIn(true);
                }}
                className={styles.registerBtn}
              >
                Register
              </span>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default SignupPage;
