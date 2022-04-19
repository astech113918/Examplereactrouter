import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = useAuth();

  return (
    <div>
      <h1>WELCOME User</h1>
    </div>
  );
}

export default Profile;
