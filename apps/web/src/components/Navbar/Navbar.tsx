'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
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
                src="/logo.png"
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
            className="flex flex-row items-center lg:space-x-10 space-x-6 max-md:hidden"
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
                href=""
              >
                Event
              </Link>
            </li>
            <li>
              <Link
                className="border-slate-600 hover:border-primary hover:bg-primary hover:text-white"
                href=""
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                className="border-slate-600 hover:border-primary hover:bg-primary hover:text-white"
                href=""
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
            className="flex flex-row items-center justify-between cursor-pointer space-x-5"
          >
            <button className="lg:px-7 py-2 px-10 bg-white text-black">
              <Link href="/login">Log In</Link>
            </button>
            <button className="lg:px-7 py-2 px-10 bg-white text-black">
              <Link href="/register">Register</Link>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
