"use client";
import React, { useState } from "react";
import {  useSelector } from "react-redux";
import UserItem from "./UserItem";



const DisplayUserList = () => {
  const userData = useSelector((data) => data.users);
  console.log(userData);

  return (
    <div className="border w-2/3  px-12 py-4">
      <p className="text-3xl font-bold">User List</p>
      {userData && userData.map((data, i) => <UserItem key={i} data={data} />)}
    </div>
  );
};

export default DisplayUserList;
