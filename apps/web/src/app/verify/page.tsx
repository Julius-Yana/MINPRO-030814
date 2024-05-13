'use client'

import Footer from '@/components/Footer/Footer';
import React from 'react';

export default function Verify() {
  function resendEmail() {
    // Kode untuk mengirim ulang email verifikasi akan ditambahkan di sini
    alert("Email verification resent!");
  }

  return (
    <div className='w-full '>
      <h2>Verify your email address</h2>
      <p>We have sent a verification link to <span id="emailToVerify"></span>.</p>
      <p>Click on the link to complete the verification process. You might need to check your spam folder.</p>
      <button className="border border-gray-500 bg-white py-2 px-4 rounded" onClick={resendEmail}>Resend email</button>
      <a href="return-to-site.html" className="border border-gray-500 py-2 px-4 rounded inline-block mt-2">Return to Site →</a>
      <p>You can reach us at <a href="contact.html">if you have any questions.</a></p>
      <Footer />
    </div>
  );
}
