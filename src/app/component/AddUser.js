"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from '../redux/slice'; // import the addUser action

const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();

  function handleAddUser() {
    // console.log("added");
    // console.log(name);
    dispatch(addUser(name)); // use the addUser action here
  }

  return (
    <div className="border  p-10 flex flex-col w-2/3 gap-3">
      <h2 className="text-2xl">Add User </h2>
      <label>
        {" "}
        Name:
        <input
          type="text"
          placeholder="Add user name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button className="border px-10 py-1" onClick={handleAddUser}>
        Add User
      </button>
    </div>
  );
};

export default AddUser;
