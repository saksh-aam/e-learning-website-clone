import React, { useCallback, useState, useEffect } from 'react'
import '../styles/cards.css'
const Card = ({ tutorial }) => {
    const [courseid, setcourseid]=useState()
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
    
    
    
  return (
      <div>
          <div className='flex-container'>
          <h2>{tutorial.Title}</h2>
              <div className='desc'>{tutorial.Description}</div>
              <div className='duration'>
                  <div className='start'><span className='dates'>Start Date </span><span>{tutorial.startDate}</span></div>
                  <div className='end'><span className='dates'>End Date </span><span>{tutorial.endDate}</span></div>
                  <h5 className='status'>{coursestatus}</h5>
                  <button >Start Learning</button>
              </div>
          </div>
    </div>
  )
}

export default Card