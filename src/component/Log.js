import React from "react";
import "./logForm.css";
import { useState } from "react";
import { useAuth } from "../component/Auth";
import { useNavigate } from "react-router-dom";

function Sign() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    auth.login(user, password);
    navigate("/profile");
  };
  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <div className="container" id="formLog">
      <h1>Login</h1>
      {/* <label> Username: </label>

      <input
        type="text"
        placeholder="enter user name"
       c}
      /> */}

      {/* <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button> */}
      <div className="logForm">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Username"
              onChange={(e) =>
                setUser(e.target.value) && setPassword(e.target.value)
              }
            />
            <div id="emailHelp" class="form-text">
              we will provide correct username
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              class="form-control"
              id="myInput"
            />
            <input type="checkbox" onClick={myFunction} />
            &ensp; Show Password
          </div>
          <button class="btn btn-primary btn-lg" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sign;
