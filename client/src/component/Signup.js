import React, { useState } from "react";
import "../styles/authstyle.css";
import {  useNavigate } from "react-router-dom";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneno: "",
    password: "",
    confpassword: "",
  });
    const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const storeData = async (e) => {
        e.preventDefault();
        const { name, email, phoneno, password, confpassword } = user;

        const res = await fetch('api/user/register', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phoneno,
                password,
                confpassword
            })
        });

        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Invalid registeration")
        }
        else {
          localStorage.setItem("token", data.authtoken);
            window.alert("Registration successfull");
            navigate('./login');
        }
    }
  return (
    <div className="auth">
      <div className="container">
        <h1 className="form-title">Sign Up</h1>
        <form method='POST' className="form">
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your username"
            value={user.name}
            onChange={handleChange}
          ></input>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
          ></input>
          <label htmlFor="phoneno"></label>
          <input
            type="number"
            name="phoneno"
            id="phoneno"
            placeholder="Enter your phoneno."
            value={user.phoneno}
            onChange={handleChange}
          ></input>
          <label htmlFor="password"></label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
          ></input>
          <label htmlFor="password"></label>
          <input
            type="text"
            name="confpassword"
            id="confpassword"
            placeholder="Confirm password"
            value={user.confpassword}
            onChange={handleChange}
          ></input>
        </form>
        <button className="btn btn-primary" type="submit" value="signup" onClick={storeData}>
          Sign Up
        </button>
        <a href="./Login">Already have an account?</a>
      </div>
    </div>
  );
};

export default Signup;
