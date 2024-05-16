"use client"
import { useEffect } from 'react';
import Footer from '@/components/Footer/Footer';

export default function Verify() {
  useEffect(() => {
    // Mendapatkan token dari URL
    const url = window.location.href;
    const tokenIndex = url.lastIndexOf('/') + 1;
    const token = tokenIndex > 0 ? url.substring(tokenIndex) : '';
    console.log(token);
    
    async function verifyAccount() {
      try {
        if (!token) {
          alert('Token not found');
          return;
        }

        const response = await fetch(`http://localhost:8000/verify`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          alert("Account verified successfully!");
          // Redirect ke halaman tertentu setelah verifikasi berhasil
          window.location.href = '/'; // Ganti dengan rute yang sesuai
        } else {
          // Handle kesalahan jika verifikasi gagal
          const data = await response.json();
          alert(data.message || 'Failed to verify account.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while verifying the account.');
      }
    }

    verifyAccount(); // Panggil fungsi verifikasi saat komponen dimuat
  }, []); // Tidak ada dependensi karena tidak ada perubahan pada `window.location.href`

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow flex items-center justify-center'>
        <div className='w-full max-w-xl p-16 border border-gray-300 rounded shadow-lg'>
          <h2 className='text-3xl font-semibold mb-6 text-center'>Verifying your email address...</h2>
          {/* Anda bisa menambahkan indikator loading di sini jika diperlukan */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
