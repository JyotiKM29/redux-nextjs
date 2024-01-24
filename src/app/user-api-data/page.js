"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slice";

const APIUser = () => {
  const dispatch = useDispatch();
  const userAPIdata = useSelector((data)=>data.userAPIData)
  console.log(userAPIdata)
  return (
    <div>
      <h2 className="text-black text-2xl">User API data </h2>
      {userAPIdata.map((user)=> <p key={user.id}>{user.name}</p>)}
      <button onClick={()=>dispatch(fetchApiUsers())}>Load User</button>
    </div>
  );
};

export default APIUser;
