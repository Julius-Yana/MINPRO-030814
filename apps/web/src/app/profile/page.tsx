import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import React from 'react';

export default function Profile() {
  return (
    <main className="flex flex-col h-screen">
      <div className="w-full max-w-4xl mx-auto p-4 pt-6">
        <div className="w-full px-6 pb-8 mt-8 sm:max-w-3xl sm:rounded-lg">
          <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
          <div className="grid max-w-2xl mx-auto mt-8">
            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
              <img className="object-cover w-40 h-40 p-4 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500" src="/user.png" alt="Bordered avatar" />
              <div className="flex flex-col space-y-5 sm:ml-8">
                <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200">
                  Change picture
                </button>
                <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200">
                  Delete picture
                </button>
              </div>
            </div>
            <div className="items-center mt-8 sm:mt-14 text-[#202142]">
              <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                <div className="w-full">
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your Name</label>
                  <input type="text" id="first_name" className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="Your Name"  required />
                </div>
              </div>
              <div className="mb-2 sm:mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your Email</label>
                <input type="email" id="email" className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="your.email@mail.com" required />
              </div>
              <div className="mb-2 sm:mb-6">
                <label htmlFor="profession" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Password</label>
                <input type="text" id="profession" className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="your password" required />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
