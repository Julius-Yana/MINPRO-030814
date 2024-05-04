'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Section = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'keyframe', duration: 0.4 },
    },
  };

  const image = {
    hidden: { opacity: 0, scale: 1.1, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'keyframe', duration: 0.4 },
    },
  };

  return (
    <div className="mt-40 mb-40">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true }}
        className="md:grid grid-cols-2 gap-x-7 space-y-10"
      >
        <motion.img variants={image} src="/westlife.png" alt="westlife" />
        <div className="hidden md:block text-4xl md:text-7xl text-neutral-800 flex items-center font-extrabold uppercase">
          Elegant
        </div>
        <motion.div variants={item}>
          <h1 className="text-4xl mt-7 mb-4 sm:text-3xl uppercase">Westlife</h1>
          <p className="text-sm text-slate-200 sm:text-xl">Back to 90'</p>
          <div className="text-slate-200 mt-3 sm:text-sm">
            <p className="text-4xl mt-7 mb-4 sm:text-3xl">
              <svg
                className="inline-block w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 4h10a2 2 0 011.99 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2h10a2 2 0 012-2V7H6a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2H6a2 2 0 012-2z"
                />
              </svg>
              01 Juni 2024
            </p>
            <p className="text-4xl mt-7 mb-4 sm:text-3xl">
              <svg
                className="inline-block w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2m0 18l5.447 2.724A1 1 0 0015 20.382V9.618a1 1 0 00-.553-.894L9 6m0 14V6m0 0L3 9.382m6-3.764L15 9.382M15 6v14.382a1 1 0 01-.553.894L9 23.382"
                />
              </svg>
              Surabaya
            </p>
            <hr className="my-4" /> <hr />
            <p className="text-4xl mt-7 mb-4 sm:text-3xl">
              <svg
                className="inline-block w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-2.28 0-4 1.79-4 4s1.72 4 4 4 4-1.79 4-4-1.72-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM12 6V4m0 16v-2m8-8h2M4 12H2m16 4h2m-2-8h2M6 18v2m0-16V2m12 0v2m-6 16h4m-6 0H6m6-16h-4m6 0H6m6 16V6m0 0V4"
                />
              </svg>
              Rp 100.000
            </p>
          </div>

          <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
            <Link href="/beli">Beli Tiket</Link>
          </button>
        </motion.div>
        <motion.img
          variants={image}
          className="md:mt-[40px]"
          src="/nsync.jpg"
          alt="nsync"
        />
        <div className="hidden md:block text-4xl md:text-7xl text-neutral-800 flex items-center mb-20 font-extrabold uppercase">
          Events
        </div>
        <motion.div variants={item}>
          <h1 className="text-4xl mt-7 mb-4 sm:text-3xl uppercase">Nsync</h1>
          <p className="text-sm text-slate-200 sm:text-xl">
            Tour allround the World
          </p>
          <p className="text-slate-200 mt-3 sm:text-sm">
            <svg
              className="inline-block w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 4h10a2 2 0 011.99 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2h10a2 2 0 012-2V7H6a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2H6a2 2 0 012-2z"
              />
            </svg>
            31 Juli 2024
          </p>
          <p className="text-4xl mt-7 mb-4 sm:text-3xl">
            <svg
              className="inline-block w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2m0 18l5.447 2.724A1 1 0 0015 20.382V9.618a1 1 0 00-.553-.894L9 6m0 14V6m0 0L3 9.382m6-3.764L15 9.382M15 6v14.382a1 1 0 01-.553.894L9 23.382"
              />
            </svg>
            Bandung
          </p>
          <hr className="my-4" /> <hr />
          <p className="text-4xl mt-7 mb-4 sm:text-3xl">
            <svg
              className="inline-block w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-2.28 0-4 1.79-4 4s1.72 4 4 4 4-1.79 4-4-1.72-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM12 6V4m0 16v-2m8-8h2M4 12H2m16 4h2m-2-8h2M6 18v2m0-16V2m12 0v2m-6 16h4m-6 0H6m6-16h-4m6 0H6m6 16V6m0 0V4"
              />
            </svg>
            Rp. 250.000
          </p>
          <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
            <Link href="/beli">Beli Tiket</Link>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section;
