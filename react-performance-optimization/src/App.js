import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="app">
      <h1>Users</h1>
      <UserList users={users} />
      <div className="counter-section">
        <button onClick={handleIncrement}>Increment {count}</button>
      </div>
    </div>
  );
};

export default App;
