import React,{useState} from 'react'
import '../styles/authstyle.css'
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState({
    email: "",
    password:""
  })
  const handleChange = (e) => {
    e.preventDefault();
    setCreds({ ...creds, [e.target.name]: e.target.value });
    };
  const navigate = useNavigate();
  const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = creds;

        const res = await fetch('api/user/login', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,
                password,
            })
        });

        const data = await res.json();
        if (data.status === 400 || !data) {
            window.alert("Invalid credentials")
        }
        else {
            localStorage.setItem("token", data.authtoken);
            window.alert("Login successfull");
            navigate('/dashboard');
        }
  }
  
  return (
      <div>
          <div className='auth'>
          <div className='container'>
              <h1 className='form-title'>Sign In</h1>
              <form className='form'>
                  <label htmlFor='email'></label>
                  <input type='text' name='email'  placeholder='Enter your email' value={creds.email} onChange={handleChange}></input>
                  <label htmlFor='password'></label>
                  <input type='text' name='password'  placeholder='Enter your password' value={creds.password} onChange={handleChange}></input>
              </form>
              <button className="btn btn-primary" type="submit" value='login in' onClick={loginUser}>Login</button>
          </div>
    </div>
    </div>
  )
}

export default Login