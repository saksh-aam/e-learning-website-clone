import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  bg-white rounded" >
  <a className="navbar-brand" href="#">Coursify</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        {!localStorage.getItem('token')?<Link to='/login'>Login</Link>:<Link to='/profile'>Profile</Link>}
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Courses</a>
      </li>
      <li className="nav-item">
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
};
export default Navbar;
