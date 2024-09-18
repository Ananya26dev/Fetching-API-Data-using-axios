import React, { useEffect, useState } from "react";
import axios from "axios";
const Table = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div>
        <h2>User Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email ID</th>
              <th>Contact No.</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.name}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
