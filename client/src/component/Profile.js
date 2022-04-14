import React, { useEffect, useCallback, useState } from 'react';

const Profile = () => {
  const [details, setDetails] = useState([{
    name: "",
    email: "",
    phoneno: "",
    coursesTaken: []
  }],
  );

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
    }
  }
  useEffect(() => {
    let bool = true;
    if (bool) {
      getuserData();
      console.log(details)
      
    }
      return () => {
        bool = false;
      }
    }, []);
    
  
    return (
      <div className='profile'>
        <h1 className='dash-heading'>Profile</h1>
        <div className='dash-container'>
          {details.name}
        </div>
      </div>
    )
  }

export default Profile