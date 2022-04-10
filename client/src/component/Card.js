import React, { useCallback, useState } from 'react'
import '../styles/cards.css'
const Card = ({ tutorial }) => {
    // let [coursestatus, setStatus] = useState("");
    // useCallback(() => {
    //     if (tutorial.startDate < Date.now()) {
    //         setStatus("Upcoming");
    //     }
    //     else if (tutorial.startDate <= Date.now() && tutorial.endDate >= Date.now()) {
    //         setStatus("Ongoing");
    //     }
    //     else if (tutorial.endDate > Date.now()) {
    //         setStatus("Course ended");
    //     }
    // }, [tutorial.startDate, tutorial.endDate]);
  return (
      <div>
          <div className='flex-container'>
          <h2>{tutorial.Title}</h2>
              <div className='desc'>{tutorial.Description}</div>
              <div className='duration'>
                  <div className='start'><span className='dates'>Start Date </span><span>{tutorial.startDate}</span></div>
                  <div className='end'><span className='dates'>End Date </span><span>{tutorial.endDate}</span></div>
                  {/* <h3>{coursestatus}</h3> */}
                  <button>Start Learning</button>
              </div>
          </div>
    </div>
  )
}

export default Card