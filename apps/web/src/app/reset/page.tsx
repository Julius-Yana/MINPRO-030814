'use client'

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer';

export default function Reset() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event:any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/users/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Email sent successfully');
        setError('');
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (err:any) {
      setMessage('');
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="m-20 mt-10 mb-8 max-w-md mx-auto">
        <div className="border border-gray-300 p-5 rounded-md">
          <h2 className="text-lg font-semibold mb-4">
            Silakan tuliskan email yang terdaftar untuk membuat kata sandi baru
          </h2>
          <div className="mb-4">
            <label htmlFor="email" className="block">Alamat Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
          >
            Lanjutkan
          </button>
          {message && (
            <p className="mt-4 text-green-500">{message}</p>
          )}
          {error && (
            <p className="mt-4 text-red-500">{error}</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
