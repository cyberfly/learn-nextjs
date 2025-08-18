"use client";

import * as React from "react";
import { useState, useEffect } from "react";

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
}

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

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
          <li key={index}>
            
            {user.firstName} {user.lastName} - {user.age} - {user.phone}
            <img src={user.image} alt="" />    
        </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
