'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);    
  };

  const container = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <div>
      <div className="pt-5">
        <div className="flex flex-row items-center justify-between">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link href="/">
              <Image
                priority={true}
                src="/logotiketin.png"
                alt="logo"
                width={196}
                height={20}
              />
            </Link>
          </motion.div>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={container}
            className="flex flex-row font-bold text-3xl items-center lg:space-x-10 space-x-6 max-md:hidden"
          >
            <li>
              <Link
                className="border-slate-600 hover:border-primary hover:bg-primary hover:text-white"
                href="/"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                className="border-slate-600 hover:border-primary hover:bg-primary hover:text-white"
                href="/event"
              >
                Event
              </Link>
            </li>
            <li>
              <Link
                className="border-slate-600 hover:border-primary hover:bg-primary hover:text-white"
                href="/tentang"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                className="border-slate-600 hover:border-primary hover:bg-primary hover:text-white"
                href="/kontak"
              >
                Kontak
              </Link>
            </li>
          </motion.ul>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={container}
            className="flex flex-row items-center text-3xl hover justify-between cursor-pointer space-x-5"
          >
            {!isLoggedIn ? (
              <>
                <button 
                  className="lg:px-7 py-2 px-10 bg-emerald-500 text-black rounded-sm"
                 
                >
                   <Link href="/login">Log In</Link>
                </button>
                <button className="lg:px-7 py-2 px-10 bg-white text-black rounded-sm">
                  <Link href="/register">Register</Link>
                </button>
              </>
            ) : (
              <>
                <button 
                  className="lg:px-7 py-2 px-10 bg-red-500 text-white rounded-sm"
                  onClick={handleLoginClick}
                >
                  Log Out
                </button>
                <Link href="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                  {/* < className="h-10 w-10 text-gray-800" /> */}
                </Link>
                <div className="space-y-3">
  {/* <!-- Toast --> */}
  <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert">
    <div className="flex p-4">
      <div className="flex-shrink-0">
        <svg className="flex-shrink-0 size-4 text-blue-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
        </svg>
      </div>
      <div className="ms-3">
        <p className="text-lg text-gray-700 dark:text-neutral-400">
          Selamat anda dapat potongan 10 %
        </p>
      </div>
    </div>
  </div>
  {/* <!-- End Toast --> */}  
</div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
