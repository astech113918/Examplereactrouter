import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo.png";
import "./navbar.css";
import { useAuth } from "../component/Auth";
import { FaUserAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  const log = useNavigate();
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
   
    <div className="container-fluid" id="nav">
      <div className="row d-flex justify-content-between">
        <div className="col-md-6">
         <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      </div>
      <div className="col-md-6">
        <nav className="navBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="tutorials">Tutorials</NavLink>

        <NavLink to="blog">Blog</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
        {/* this is my logic  */}
        {auth.user && <NavLink to="profile">Profile</NavLink>}

        {(!auth.user && (
          <button className="btn btn-success" onClick={() => log("log")}>
            Login
          </button>
        )) || (
          <button className="btn btn-info" onClick={handleLogout}>
            Logout
          </button>
        )}
     
     
      <span className="logoUser">
        <FaUserAlt className="icon" />
        &ensp; {auth.user}
      </span>
      <button className="btn btn-success" onClick={() => log("sign")}>
        Sigup
      </button>
      </nav>
      </div>
      </div>
    </div>
   
  );
}

export default NavBar;
