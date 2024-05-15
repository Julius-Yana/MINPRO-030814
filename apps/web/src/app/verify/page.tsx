'use client'

import Footer from '@/components/Footer/Footer';
import React from 'react';

export default function Verify() {
  function resendEmail() {
    // Code to resend the verification email will be added here
    alert("Email verification resent!");
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow flex items-center justify-center'>
        <div className='w-full max-w-xl p-16 border border-gray-300 rounded shadow-lg'>
          <h2 className='text-3xl font-semibold mb-6 text-center'>Verify your email address</h2>
          <p className='mb-4 text-center'>
            We have sent a verification link to <span id="emailToVerify"></span>.
          </p>
          <p className='mb-6 text-center'>
            Click on the link to complete the verification process. You might need to check your spam folder.
          </p>
          <div className='text-center'>
            <button
              className="border border-gray-500 bg-white py-2 px-8 rounded mb-4"
              onClick={resendEmail}
            >
              Resend email
            </button>
            <br />
            <a
              href="return-to-site.html"
              className="border border-gray-500 py-2 px-8 rounded inline-block mb-4"
            >
              Return to Site →
            </a>
          </div>
          <p className='text-center'>
            You can reach us at <a href="contact.html">if you have any questions.</a>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
