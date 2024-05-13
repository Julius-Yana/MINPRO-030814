'use client'

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer';

export default function Reset() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Logika untuk menangani klik tombol lanjutkan
    console.log("Email yang dimasukkan:", email);
    // Kamu bisa menambahkan logika lain sesuai kebutuhan, seperti mengirimkan email verifikasi, dll.
  };

  return (
    <div className="flex flex-col min-h-screen justify-between"> {/* Menggunakan flexbox untuk memastikan footer tetap di bagian bawah */}
      <div className="m-20 mt-10 mb-8 max-w-md mx-auto"> {/* Menambahkan margin atas yang lebih kecil */}
        <div className="border border-gray-300 p-5 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Silakan tuliskan email yang terdaftar untuk membuat kata sandi baru</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block">Alamat Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChange} className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <button onClick={handleSubmit} className="w-full px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">Lanjutkan</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
