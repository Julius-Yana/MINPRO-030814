'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Event {
  day: string;
  location: string;
  description: string;
}

interface DateData {
  month: string;
  events: Event[];
}

interface ScheduleData {
  dates: DateData[];
}

const artists = [
  '98',
  'a1',
  'ultra',
  'westlife',
  'twice',
  'redvelvet',
  'nsync',
  'bsb',
  'boyzone',
  'blackpink',
];

const Schedule: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>(2);
  const [scheduleData, setScheduleData] = useState<ScheduleData[]>([]);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const response = await fetch('/data.json');
        const data: ScheduleData[] = await response.json();
        setScheduleData(data);
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }
    };
    fetchScheduleData();
  }, []);

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

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  const renderImage = () => {
    const images = [
      '98.webp',
      'a1.jpeg',
      'ultra.jpeg',
      'westlife.png',
      'twice.webp',
      'redvelvet.jpg',
      'nsync.jpg',
      'bsb.webp',
      'boyzone.jpg',
      'blackpink.jpeg',
    ];

    return images.map((image, index) => (
      <img
        className={`opacity-90 w-full h-auto max-h-[600px] object-top max-md:mb-20 ${
          selectedItem === index ? '' : 'hidden'
        }`}
        key={index}
        src={image}
        alt="Image"
      />
    ));
  };

  const renderDates = () => {
    if (!scheduleData[selectedItem]) return null;

    const dates = scheduleData[selectedItem].dates;

    return (
      <div className="md:absolute bottom-2 flex items-start justify-around w-full text-neutral-100 max-md:grid grid-cols-2 max-md:gap-6">
        {dates.map((date, index) => (
          <div key={index} className="text-white">
            <h1 className="lg:text-4xl md:text-3xl text-2xl mb-4">
              {date.month}
            </h1>
            <ul className="lg:space-y-4 space-y-2">
              {date.events.map((event, i) => (
                <li
                  key={i}
                  className="flex flex-row items-center lg:space-x-5 space-x-2"
                >
                  <h2 className="lg:text-3xl text-xl">{event.day}</h2>
                  <div className="max-md:text-sm">
                    <h3>{event.location}</h3>
                    {event.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="mt-20 mb-40"
    >
      <motion.div variants={item}>
        <h1 className="lg:text-7xl text-4xl text-center mb-6">Jadwal</h1>
        <p className="lg:text-2xl text-base text-center w-6/12 max-md:w-10/12 mx-auto text-neutral-400">
          "Temukan jadwal idola favoritmu dan dukung mereka di konser-konser
          spektakuler yang luar biasa."
        </p>
      </motion.div>
      <motion.div
        variants={item}
        className="mt-24 lg:text-base overflow-x-auto"
      >
        <ul className="flex items-center text-xl md:text-3xl uppercase space-x-9 whitespace-nowrap scrollbar-hide text-neutral-500">
          {artists.map((artist, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={`${
                selectedItem === index
                  ? 'scale-125 text-yellow-500 shadow-xl'
                  : ''
              } transition-all ease-in duration-150 cursor-pointer`}
            >
              {artist}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div variants={item} className="mt-24">
        <div className="relative md:bg-gradient-to-tl from-black to-white z-10">
          {renderImage()}
          {renderDates()}
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className="flex items-baseline mt-28 justify-center"
      >
        <button className="px-5 py-2 border-2 hover:bg-white hover:text-black transition-all ease duration-150">
          Show more
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Schedule;
