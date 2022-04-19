import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiRadioButtonLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h2>user 1</h2>
      <h2>user 2</h2>
      <h2>user 3</h2>
      <Outlet />
      <span style={{ color: "green" }}>{/* <RiRadioButtonLine /> */}</span>
      <span>Active User</span>{" "}
      <FaUserAlt
        onClick={() => setSearchParams({ filter: "active" })}
        style={{
          color: "green",
          fontSize: "26px",
          //   marginLeft: "100px",
          cursor: "pointer",
        }}
      />
      <span style={{ marginLeft: "60px" }}>All users</span>
      <HiUsers
        onClick={() => setSearchParams()}
        style={{
          color: "darkgray",
          fontSize: "50px",
          //   marginLeft: "100px",
          cursor: "pointer",
        }}
      />
      {showActiveUsers ? (
        <h1 style={{ color: "green" }}>Active useras</h1>
      ) : (
        <h2>All users</h2>
      )}
    </div>
  );
}

export default Users;
