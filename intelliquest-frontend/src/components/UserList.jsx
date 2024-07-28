import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://intelliquestdb.onrender.com/api/users');
        console.log('Response data:', response.data); // Add this line to log response data
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          setError('Data is not in expected format');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(users) || users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

