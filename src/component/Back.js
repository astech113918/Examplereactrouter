import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./back.css";

function Back() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <Link to="node">NodeJs</Link>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="php">PHP</Link>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="mysql">My Sql</Link>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="mongodb">MongoDB</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Back;
