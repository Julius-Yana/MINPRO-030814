// Dashboard.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

// Define types for Referral, Point, and Discount
interface Referral {
  id: number;
  referralCode: string;
}

interface Point {
  id: number;
  Amount: number;
}

interface Discount {
  id: number;
  discount: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  referral: Referral[];
  points: Point;
  discounts: Discount;
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
        // Handling cases where points or discounts are empty
        const usersWithDefaultValues = data.users.map((user: User) => ({
          ...user,
          points: user.points || { id: 0, Amount: 0 },
          referral: user.referral || [],
          discounts: user.discounts || { id: 0, discount: 0 },
        }));
        setUsers(usersWithDefaultValues);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-3xl font-semibold">Superadmin Dashboard</h1>
      <div className="flex justify-end mb-3">
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
            <th scope="col" className="px-4 py-2">Discount</th>
            <th scope="col" className="px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.isActive ? 'Yes' : 'No'}</td>
              <td className="border px-4 py-2">{user.points.Amount}</td>
              <td className="border px-4 py-2">{user.referral.length > 0 ? user.referral[0].referralCode : 'N/A'}</td>
              <td className="border px-4 py-2">{user.discounts.discount}</td>
              <td className="border px-4 py-2">{format(new Date(user.createdAt), 'dd/MM/yyyy')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
