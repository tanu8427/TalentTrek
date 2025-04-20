import React from 'react';
import { IoBriefcaseOutline } from "react-icons/io5";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
       
      <div className="navbar-left">
        <IoBriefcaseOutline className="navbar-logo" />
        <span className="brand-name">TalentTrek</span>
      </div>

       
      <div className="navbar-center">
        <a href="#">Find Jobs</a>
        <a href="#">Companies</a>
        <a href="#">Career Resources</a>
        <a href="#" >Salary Guide</a>
      </div>

       
      <div className="navbar-right">
        <button className="sign-in">Sign In</button>
        <button className="post-job">Post a Job</button>
      </div>
    </nav>
  );
};

export default Navbar;
