"use client";

import * as React from "react";
import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);

        const users_data = data.users;

        setUsers(users_data);
      });
  }, []);

  return (
    <>
      <h3 className="my-8 text-3xl font-bold">
        User List from API with useEffect and useState
      </h3>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.firstName} {user.lastName} - {user.age}</li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
