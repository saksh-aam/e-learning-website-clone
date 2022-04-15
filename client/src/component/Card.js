import React, { useState, useEffect } from 'react'
import '../styles/cards.css'
const Card = ({ tutorial }) => {
    let [coursestatus, setStatus] = useState("");
    useEffect(() => {
        const today = new Date(Date.now());
        if (tutorial.startDate > today.toISOString()) {
            setStatus("Upcoming");
        }
        else if (tutorial.startDate <= today.toISOString() && tutorial.endDate >= today.toISOString()) {
            setStatus("Ongoing");
        }
        else if (tutorial.endDate < today.toISOString()) {
            setStatus("Course ended");
        }
    }, [tutorial.startDate, tutorial.endDate]);
    
    const enrollcourse = async (e) => {
        // e.preventDefault();

        try {
            const temp = localStorage.getItem('useruniqueid');
            // console.log(temp);
            const res = await fetch(`https://localhost:5000/enrollcourse/${temp}/${tutorial._id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type":"application/json"
                },
                // body: JSON.stringify({
                //     updatecourse:tutorial._id,
                // })
            });

            const data = await res.json();
            if (data.status === 422 || !data) {
                window.alert("Error occured")
            }
            else {
                window.alert("Enrollment successfull");
            }
        }catch (err) {
            console.log(err)
        }
    }
    
  return (
      <div>
          <div className='flex-container'>
          <h2>{tutorial.Title}</h2>
              <div className='desc'>{tutorial.Description}</div>
              <div className='duration'>
                  <div className='start'><span className='dates'>Start Date </span><span>{tutorial.startDate}</span></div>
                  <div className='end'><span className='dates'>End Date </span><span>{tutorial.endDate}</span></div>
                  <h5 className='status'>{coursestatus}</h5>
                  <button onClick={(e) => { e.preventDefault(); enrollcourse(); }}>Start Learning</button>
              </div>
          </div>
    </div>
  )
}

export default Card