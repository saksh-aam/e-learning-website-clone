import React, { useEffect, useCallback, useState } from 'react';
import '../styles/Profile.css'
const Profile = () => {
  const [details, setDetails] = useState([{
    name: "",
    email: "",
    phoneno: "",
    coursesTaken: []
  }],
  );
    const [bool,setbool]=useState(2)
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const getuserData = async (e) => {
    // e.preventDefault();
    const temp = localStorage.getItem('useruniqueid');
    // console.log(temp);
    // await timeout(2000);
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
      console.log(details[0].name)
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
          <div className='field'>
            <span className='label'>Password</span>
            <span className='values'>{details[0].password}</span>
          </div>
          <div className='field'>
            {/* <span className='label'>Course</span>
            <span className='values'>{details[0].coursesTaken.map((course) => {
              return <h3>course.Title</h3>
            })}</span> */}
          </div>
        </div>
      </div>
    )
  }

export default Profile