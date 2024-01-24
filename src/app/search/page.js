'use client'
import React, { useState, useEffect } from 'react';

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user =>
    
    user.name.toLowerCase().includes(search.toLowerCase())

  );


  // Sort the filtered users by name
  const sortedUsers = filteredUsers.sort((a, b) => a.name.localeCompare(b.name));

  
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        onChange={e => setSearch(e.target.value)}
      />
      {/* {filteredUsers.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))} */}

      {sortedUsers.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserSearch;
