"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [userPoint, setUserPoint] = useState(0);
  const [userPointExpiration, setUserPointExpiration] = useState('');
  const [userDiscount, setUserDiscount] = useState(0);
  const [userDiscountExpiration, setUserDiscountExpiration] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    if (token) {
      axios.get('http://localhost:8000/api/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUserRole(response.data.user.role);
      })
      .catch(error => {
        console.error('Error fetching user role:', error);
      });

      axios.get('http://localhost:8000/api/users/point', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        const point = response.data.point;
        setUserPoint(point.Amount);
        setUserPointExpiration(point.expirationDate);
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
        const discount = response.data.discount;
        setUserDiscount(discount.discount);
        setUserDiscountExpiration(discount.expirationDate);
      })
      .catch(error => {
        console.error('Error fetching user discount:', error);
      });
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/';
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
          <li><Link href="/event">Event</Link></li>
          <li><Link href="/tentang">Tentang Kami</Link></li>
          <li><Link href="/kontak">Contact</Link></li>
          {isLoggedIn && userRole === 'organizer' && (
            <li><Link href="/my-event">Dashboard</Link></li>
          )}
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
                <p>Point: </p>
                <p className='text-green-500 pr-4'>
                  {userPoint} (Expires: {new Date(userPointExpiration).toLocaleDateString()})
                </p>
                <p>Discount Card: </p> 
                <p className='text-green-500 pr-4'>
                  {userDiscount}% (Expires: {new Date(userDiscountExpiration).toLocaleDateString()})
                </p>
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
