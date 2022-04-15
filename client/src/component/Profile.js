import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Profile.css'
import Coursecard from './Coursecard';
const Profile = () => {
  const [details, setDetails] = useState([{
    name: "",
    email: "",
    phoneno: "",
    courseTaken: []
  }],
  );
  const [particluarCourse, setparticluarCourse] = useState({});
  const [bool, setbool] = useState(2)
  
  const getuserData = async (e) => {
    const temp = localStorage.getItem('useruniqueid');
    const res = await fetch(`${temp}`, {
      method: 'GET',
      headers: {
        "accepts": "application/json"
      },
    });
    const data = await res.json();
    if (data) {
      setDetails(data);
      setbool(bool-1)
    }
  }
  useEffect(() => {
    if (bool) {
      getuserData();
      console.log(details)
    }
  }, [bool]);
    
    return (
      <div className='profile'>
        <h1 className='data-heading'>Profile</h1>
        <div className='data-container'>
          <div className='field'>
            <span className='label'>Name</span>
            <span className='values'>{details[0].name}</span>
          </div>
          <div className='field'>
            <span className='label'>Email</span>
            <span className='values'>{details[0].email}</span>
          </div>
          <div className='field'>
            <span className='label'>Phone Number</span>
            <span className='values'>{details[0].phoneno}</span>
          </div>
          {/* <div className='field'>
            <span className='label'>Password</span>
            <span className='values'>{details[0].password}</span>
          </div> */}
          <div className='field usercourses'>
            <span className='label sub-heading'>Course</span>
            <span className='values'>{details[0].courseTaken.map(course => {
              return <Coursecard courseid={course}></Coursecard>
            })}</span>
          </div>
          <div className='field btndiv'><button><Link to="/login" className="btn" onClick={() => { localStorage.removeItem('useruniqueid');  localStorage.removeItem('token')}}>Logout</Link></button></div>
        </div>
      </div>
    )
  }

export default Profile