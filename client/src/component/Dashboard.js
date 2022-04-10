import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../styles/cards.css'
const Dashboard = () => {
    const [details, setDetails] = useState([{
        Title: "",
        Description: "",
        startDate: "",
        endDate: ""
    }],
    );
    useEffect(() => {
        fetch("/all/courses")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            }).then((jsonRes) => setDetails(jsonRes));
    })
  return (
      <div className='dashboard'>
            <h1 className='dash-heading'>Courses</h1>
          <div className='dash-container'>
              {details.map(course => {
                    return <Card tutorial={course}></Card>
              })}
          </div>
    </div>
  )
}

export default Dashboard