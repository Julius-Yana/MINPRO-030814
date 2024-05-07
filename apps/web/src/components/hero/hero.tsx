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
        <motion.p
          variants={item}
          className="text-xl text-center w-10/12 mx-auto tracking-wider text-neutral-400 max-lg:text-base max-md:text-sm"
        >
          Event grup BoysBand era 90an ini dijamin bikin nuansa konsermu tambah
          asikk sambil nostalgia 🎶
        </motion.p>
      </motion.div>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full active">
    <img src="/bsb800x200.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/westlife800x200." className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Hero;
