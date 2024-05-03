"use client";
import { motion } from "framer-motion";

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
      transition: { type: "keyframe", duration: 0.4 },
    },
  };

  const image = {
    hidden: { opacity: 0, scale: 1.1, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "keyframe", duration: 0.4 },
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
        <div className="max-md:hidden text-4xl md:text-7xl text-neutral-800 flex items-center font-extrabold uppercase">
          Elegant
        </div>
        <motion.div variants={item}>
          <h1 className="text-4xl mt-7 mb-4 max-sm:text-3xl uppercase">
            Westlife
          </h1>
          <p className="text-2xl text-neutral-500 max-sm:text-xl">
            SM Entertainments
          </p>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">
            Westlife adalah sebuah boyband dari Irlandia yang beranggotakan
            Shane Filan, Brian McFadden, Kian Egan, Nicky Byrne, dan Mark
            Feehily. Westlife terbentuk pada tanggal 3 Juli 1998, lalu
            membubarkan diri pada tanggal 23 Juni 2012 dan kembali pada tahun
            2018
          </p>
          <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
            Show More
          </button>
        </motion.div>
        <motion.img
          variants={image}
          className="md:mt-[40px]"
          src="/nsync.jpg"
          alt="nsync"
        />
        <div className="text-4xl md:text-7xl text-neutral-800 flex items-center mb-20 font-extrabold uppercase">
          Events
        </div>
        <motion.div variants={item}>
          <h1 className="text-4xl mt-7 mb-4 max-sm:text-3xl uppercase">
            Nsync
          </h1>
          <p className="text-2xl text-neutral-500 max-sm:text-xl">
            SM Entertainments
          </p>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">
            'N Sync adalah boy band dari Orlando, Florida, Amerika Serikat yang
            beranggotakan Lance Bass, JC Chasez, Joey Fatone, Chris Kirkpatrick,
            dan Justin Timberlake. Nama mereka adalah singkatan huruf terakhir
            nama depan mereka: Justin, Chris, Joey, Lansten, dan JC
          </p>
          <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
            Show More
          </button>
        </motion.div>
        <motion.img
          variants={image}
          className="md:mt-[40px]"
          src="/boyzone.jpg"
          alt="boyzone"
        />
        <div className="text-4xl md:text-7xl text-neutral-800 flex items-center mb-20 font-extrabold uppercase">
          Events
        </div>
        <motion.div variants={item}>
          <h1 className="text-4xl mt-7 mb-4 max-sm:text-3xl uppercase">
            Boyzone
          </h1>
          <p className="text-2xl text-neutral-500 max-sm:text-xl">
            SM Entertainments
          </p>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">
            Boyzone adalah boy band dari Irlandia yang beranggotakan Keith
            Duffy, Mikey Graham, Ronan Keating, Shane Lynch, dan Stephen Gately
          </p>
          <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
            Show More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section;
