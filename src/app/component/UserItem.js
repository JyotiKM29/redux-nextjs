"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, editUser } from "../redux/slice";

 const UserItem = ({ data }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [newName, setNewName] = useState(data.name);
    const dispatch = useDispatch();
  
    function handleEditUser() {
      dispatch(editUser({ id: data.id, newName }));
      setIsEdit(false);
    }
  
    return (
      <div className="flex justify-between items-center bg-blue-200 p-3 px-4 rounded-md">
        {isEdit ? (
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        ) : (
          <span>{data.name}</span>
        )}
        {isEdit ? (
          <button className="border bg-gray-400 rounded-md px-6 py-1" onClick={handleEditUser}>
            Update
          </button>
        ) : (
          <button className="border bg-gray-400 rounded-md px-6 py-1" onClick={() => setIsEdit(true)}>
            Edit
          </button>
        )}
        <button className="bg-red-300 px-6 py-1 rounded-md" onClick={() => dispatch(removeUser(data.id))}>
          Remove
        </button>
      </div>
    );
  };


export default UserItem ;