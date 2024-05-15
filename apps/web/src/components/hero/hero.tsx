'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'smooth' } },
  };

  const image = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'smooth' } },
  };
  return (
    <div className="pt-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="flex flex-col items-center justify-between "
      >
        <h1 className="text-center text-9xl pb-2 leading-snug max-lg:text-7xl max-md:text-5xl">
          Still in 90's atmosphere{' '}
        </h1>
        <p className="text-center text-9xl pb-2 leading-snug max-lg:text-7xl max-md:text-5xl">
          Event Live Boysband
        </p>
        
      </motion.div>
      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide">
              <img src="/bsb800x200.jpg" className="w-full" />
              <div className="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                  First slide
                </span>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <img src="/bsb800x200.jpg" className="w-full" />
              <div className="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
                <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                  Second slide
                </span>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <img src="/bsb800x200.jpg" className="w-full" />
              <div className="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
                <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                  Third slide
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        <div className="hs-carousel-pagination px-5 flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
        </div>
      </div>
      {/* <!-- End Slider --> */}
    </div>
  );
};

export default Hero;
