import React, { useState, useEffect  } from "react";
import "../styles/cards.css"
const Coursecard = ({ courseid }) => {
  const [particluarCourse, setparticluarCourse] = useState({});
  const getparticluarCourse = async () => {
    const res = await fetch(`getparticularcourse/${courseid}`, {
      method: "GET",
      headers: {
        accepts: "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      setparticluarCourse(data);
      // setbool(bool-1)
    }
  };
  useEffect(() => {
    getparticluarCourse();
  }, []);

  return (
    <div className="usercourse">
      <h5 className="course-title">{particluarCourse.Title}</h5>
      <h6 className="course-desc">{particluarCourse.Description}</h6>
    </div>
  );
};

export default Coursecard;
