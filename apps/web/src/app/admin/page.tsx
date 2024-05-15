
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link

// Define interface for User data
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  point: number;
  referralCode: string;
  createdAt: string;
}

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5 text-red-600">
      <h1 className="mb-4 text-3xl font-semibold text-red-600">Superadmin Dashboard</h1>
      <div className="flex justify-end mb-3">
        {/* Langsung mengisi href pada tombol */}
        <Link href="/admin/tambah-akun">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Tambah Akun</button>
        </Link>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th scope="col" className="px-4 py-2">ID</th>
            <th scope="col" className="px-4 py-2">Name</th>
            <th scope="col" className="px-4 py-2">Email</th>
            <th scope="col" className="px-4 py-2">Role</th>
            <th scope="col" className="px-4 py-2">Active</th>
            <th scope="col" className="px-4 py-2">Point</th>
            <th scope="col" className="px-4 py-2">Referral Code</th>
            <th scope="col" className="px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2 text-red-600">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.isActive ? 'Yes' : 'No'}</td>
              <td className="border px-4 py-2">{user.point}</td>
              <td className="border px-4 py-2">{user.referralCode}</td>
              <td className="border px-4 py-2">{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
