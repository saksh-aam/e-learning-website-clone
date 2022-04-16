import React,{useState} from 'react'
import '../styles/authstyle.css'
import {  useNavigate,Link } from "react-router-dom";

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

        const res = await fetch('http://localhost:5000/api/user/login', {
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
        if (data.error) {
            window.alert(data.error)
        }
        else {
            console.log(email);
            localStorage.setItem("useruniqueid", email);
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
                  <button onClick={loginUser}>Login</button>
          </div>
    </div>
    </div>
  )
}

export default Login