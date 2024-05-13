import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';

export default function tentang() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex-grow flex flex-col justify-center">
        <div className="text-xl text-center w-10/12 mx-auto tracking-wider text-neutral-400 max-lg:text-base max-md:text-sm">
          Page Content
        </div>
      </div>
      <Footer />
    </div>
  );
}
