import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';

export default function page() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-3/4 border">
          <div className="flex items-start space-x-12 ">
            <div className="min-h-screen w-full bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="/westlife.png"
                  alt="westlife"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold">Westlife</h1>
                  <p className="py-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <button className="btn btn-primary">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/4 border">List Konser lainnya</div>
      </div>
      <Footer />
    </div>
  );
}
