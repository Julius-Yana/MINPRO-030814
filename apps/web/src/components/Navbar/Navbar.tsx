"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPoint, setUserPoint] = useState(0);
  const [userDiscount, setUserDiscount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    if (token) {
      axios.get('http://localhost:8000/api/users/point', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUserPoint(response.data.point.Amount);
      })
      .catch(error => {
        console.error('Error fetching user point:', error);
      });

      axios.get('http://localhost:8000/api/users/discount', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUserDiscount(response.data.discount.discount);
      })
      .catch(error => {
        console.error('Error fetching user discount:', error);
      });
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const container = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-row items-center justify-between">
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
              className="cursor-pointer"
            />
          </Link>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={container}
          className="hidden md:flex flex-row font-semibold text-lg items-center space-x-8"
        >
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </motion.ul>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={container}
          className="flex flex-row items-center text-lg justify-between cursor-pointer space-x-5"
        >
          {isLoggedIn ? (
            <>
              <div className="flex flex-row items-center space-x-3">
                <p>Point: </p><p className='text-green-500 pr-4'>{userPoint}</p>
                <p>Discount Card: </p> <p className='text-green-500 pr-4'>{userDiscount}%</p>
                <Link href="/profile">
                  <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
                    Edit Profile
                  </button>
                </Link>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">
                  Log In
                </button>
              </Link>
              <Link href="/register">
                <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
                  Register
                </button>
              </Link>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
