"use client";
import Footer from '@/components/Footer/Footer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', password: '', image: '', referralCode: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/';
      alert('please login first');
    } else {
      setIsLoggedIn(true);
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token:any) => {
    try {
      const response = await axios.get('http://localhost:8000/api/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Response data:", response.data);
      setUser(response.data.user); // Perbaikan pada setUser
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [id]: value }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpdateProfile = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.put('http://localhost:8000/api/users', user, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Profile updated successfully!');
      resetForm();
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
      resetForm();
    }
  };

  const handleImageUpload = async () => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.patch('http://localhost:8000/api/users/image', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Image uploaded successfully!');
      fetchUserData(token); // Refresh user data to show the updated image
      resetForm();
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
      resetForm();
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setUser({ name: '', email: '', password: '', image: '', referralCode: '' });
    fetchUserData(localStorage.getItem('token'));
  };

  return (
    <main className="flex flex-col h-screen">
      <div className="w-full max-w-4xl mx-auto p-4 pt-6">
        <div className="w-full px-6 pb-8 mt-8 sm:max-w-3xl sm:rounded-lg">
          <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
          <div className="grid max-w-2xl mx-auto mt-8">
            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
              <Image className="object-cover w-40 h-40 p-4 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500" src={user.image || "/user.png"} alt="Bordered avatar" width={160} height={160} />
              <div className="flex flex-col space-y-5 sm:ml-8">
                <input type="file" onChange={handleFileChange} className="hidden" id="file-input" />
                <label htmlFor="file-input" className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 cursor-pointer">
                  Change picture
                </label>
                <button type="button" onClick={handleImageUpload} className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200">
                  Upload picture
                </button>
              </div>
            </div>
            <div className="items-center mt-8 sm:mt-14 text-[#202142]">
              <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                <div className="w-full">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your Name</label>
                  <input type="text" id="name" className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="Your Name" value={user.name} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="mb-2 sm:mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your Email</label>
                <input type="email" id="email" className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="your.email@mail.com" value={user.email} onChange={handleInputChange} required />
              </div>
              <div className="mb-2 sm:mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Password</label>
                <input type="password" id="password" className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="your password" value={user.password} onChange={handleInputChange} required />
              </div>
              <div className="mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Referral Code</label>
                <p className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5">{user.referralCode}</p>
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={handleUpdateProfile} className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
