import React from "react";
import { Link, Outlet } from "react-router-dom";

function Tutorial() {
  return (
    <div>
      <h1>This is Tutiorials</h1>
      <div className="child">
        <nav>
          <Link to="front-end">Front-End</Link>
          <Link to="back-end">Back-End</Link>
        </nav>
      </div>
      <Outlet />
      {/* <div>this is other other component in tutorilas</div> */}
    </div>
  );
}

export default Tutorial;
