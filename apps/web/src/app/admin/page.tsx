"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState({ role: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first');
      window.location.href = '/';
    } else {
      setIsLoggedIn(true);
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('http://localhost:8000/api/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Response data:", response.data);
      setAdmin(response.data.user); // Set admin data

      if (response.data.user.role !== 'superadmin') {
        alert('Access denied: Only superadmins can access this page');
        window.location.href = '/';
      } else {
        fetchUsers(token);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Failed to fetch user data');
      window.location.href = '/';
    }
  };

  const fetchUsers = async (token) => {
    try {
      const response = await axios.get('http://localhost:8000/api/superadmin/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data.users);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const updateUserRole = async (userId, role) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        'http://localhost:8000/api/superadmin/users/role',
        { userId, role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(users.map(user => user.id === userId ? { ...user, role } : user));
      alert('Role updated successfully!');
    } catch (err) {
      setError(err.message);
      alert('Failed to update role.');
    }
  };

  const updateUserActiveStatus = async (userId, isActive) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        'http://localhost:8000/api/superadmin/users/active',
        { userId, isActive },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(users.map(user => user.id === userId ? { ...user, isActive } : user));
      alert('Active status updated successfully!');
    } catch (err) {
      setError(err.message);
      alert('Failed to update active status.');
    }
  };

  const deleteUser = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      console.log(`Deleting user with ID: ${userId}`);
      await axios.delete(`http://localhost:8000/api/superadmin/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(users.filter(user => user.id !== userId));
      alert('User deleted successfully!');
    } catch (err) {
      setError(err.message);
      alert('Failed to delete user.');
      console.error(err.response.data); // Log response data to understand the error
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Active</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                <select
                  value={user.role}
                  onChange={(e) => updateUserRole(user.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="user">User</option>
                  <option value="superadmin">Superadmin</option>
                  <option value="organizer">Organizer</option>
                </select>
              </td>
              <td className="py-2 px-4 border-b">
                <select
                  value={user.isActive ? 'Active' : 'Inactive'}
                  onChange={(e) => updateUserActiveStatus(user.id, e.target.value === 'Active')}
                  className="border rounded px-2 py-1"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
