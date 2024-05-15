"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const AddAccountPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'User',
    isActive: false,
    referralCode: '',
    point: 0
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="container mt-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Tambah Akun</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            required
          >
            <option value="User">User</option>
            <option value="Organizer">Organizer</option>
            <option value="Superadmin">Superadmin</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="isActive" className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">Aktif</span>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700">Referral Code</label>
          <input
            type="text"
            id="referralCode"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleChange}
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="point" className="block text-sm font-medium text-gray-700">Point</label>
          <input
            type="number"
            id="point"
            name="point"
            value={formData.point}
            onChange={handleChange}
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            min="0"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 mb-4 rounded-md hover:bg-blue-600">Submit</button>
        <Link href="/admin">
        <button className="ml-4 bg-gray-200 text-gray-800 px-6 py-3 mb-4 rounded-md hover:bg-gray-300">Kembali</button>
        </Link >
      </form>
    
        
      
    </div>
  );
};

export default AddAccountPage;
