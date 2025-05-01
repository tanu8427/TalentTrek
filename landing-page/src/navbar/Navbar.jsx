import React from 'react';
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa"; // Profile icon
import './Navbar.css';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuthStore();

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
        <a href="#">Salary Guide</a>
      </div>

      <div className="navbar-right">
        {isLoggedIn ? (
          <FaUserCircle
            className="text-3xl text-gray-700 cursor-pointer"
            onClick={logout}
            title="Click to Logout"
          />
        ) : (
          <>
            <button className="sign-in" onClick={login}>Sign In</button>
            <button className="post-job"onClick={login}>Sign up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
