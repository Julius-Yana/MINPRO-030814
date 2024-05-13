import React from 'react';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

export default function kontak() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex-grow flex flex-col justify-center">
        <div className="text-xl text-center w-10/12 mx-auto tracking-wider text-neutral-400 max-lg:text-base max-md:text-sm">
          <p>Jl. Raya Antapani | SEJATI INDAH RAYA</p>
          <p>B/36, Probolinggo, Kec. Antapani Kidul, Bandung,</p>
          <p>Jawa Barat 40291</p>
          <p>support@kitatiketin.com</p>
          <p>+62851xxxxxx</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
