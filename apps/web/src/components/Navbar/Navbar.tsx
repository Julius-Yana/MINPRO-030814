"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Lakukan pengecekan status login di sini menggunakan token
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Ubah isLoggedIn menjadi true jika token ada
  }, [isLoggedIn]);

  const handleLogout = () => {
    // Hapus token dari penyimpanan lokal
    localStorage.removeItem('token');
    // Set isLoggedIn menjadi false
    setIsLoggedIn(false);
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

            {isLoggedIn ? (
              <>
                <button
                  onClick={handleLogout}
                  className="lg:px-7 py-2 px-10 bg-white text-black rounded-sm"
                >
                  Log Out

                </button>
              </>
            ) : (
              <>

                <Link href="/login">
                  <button
                    className="lg:px-7 py-2 px-10 bg-emerald-500 text-black rounded-sm"
                  >
                    Log In
                  </button>
                </Link>
                <button className="lg:px-7 py-2 px-10 bg-white text-black rounded-sm">
                  <Link href="/register">Register</Link>
                </button>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
