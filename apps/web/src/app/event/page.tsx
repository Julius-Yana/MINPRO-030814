"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import { Footer } from '@/components/Footer';

interface Event {
  id: number;
  name: string;
  description: string;
  image?: string;
  priceVip?: number;
  priceRegular?: number;
  quotaVip?: number;
  quotaRegular?: number;
  discount?: number;
  kuotaDiscount?: number;
  date: string;
  freeEvent: boolean;
  location: string;
}

const EventPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [isFreeEvent, setIsFreeEvent] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/event');
        setEvents(response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered: Event[] = events.slice();

    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (startDate && endDate) {
      filtered = filtered.filter(event =>
        new Date(event.date) >= new Date(startDate) && new Date(event.date) <= new Date(endDate)
      );
    }

    filtered = filtered.filter(event =>
      (event.priceVip ?? 0) <= priceRange[1] || (event.priceRegular ?? 0) <= priceRange[1]
    );

    if (isFreeEvent !== null) {
      filtered = filtered.filter(event => event.freeEvent === isFreeEvent);
    }

    setFilteredEvents(filtered);
  }, [events, searchTerm, startDate, endDate, priceRange, isFreeEvent]);

  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-3/4">
          <h1 className="text-4xl mt-7 mb-4 sm:text-3xl uppercase font-serif text-gray-800">List Event</h1>
          <div className="container mx-auto p-10">
            <div className="grid grid-cols-2 gap-8">
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <div key={event.id} className="card bg-white shadow-xl mb-10">
                    <figure className="relative w-full h-64">
                      <Image
                        src={event.image || '/98.webp'}
                        alt={event.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </figure>
                    <div className="card-body p-4">
                      <h2 className="card-title text-xl font-bold mb-2 text-blue-800">{event.name}</h2>
                      <p className="text-gray-700">{event.description}</p>
                      <p className="text-gray-700 mt-2">{new Date(event.date).toLocaleDateString()}</p>
                      <p className="text-gray-700">{event.location}</p>
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          {event.freeEvent ? (
                            <p className="text-green-500 font-bold">FREE</p>
                          ) : (
                            <div>
                              <p className="text-xl font-bold text-blue-800">VIP: Rp. {event.priceVip}</p>
                              <p className="text-gray-700">Regular: Rp. {event.priceRegular}</p>
                              {event.discount && (
                                <p className="text-red-500">Diskon: {event.discount}% (Sisa Kuota: <span className="text-red-500">{event.kuotaDiscount}</span>)</p>
                              )}
                            </div>
                          )}
                        </div>
                        <button className="btn btn-primary">
                          <Link href="/beli">Beli Tiket</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No events found.</p>
              )}
            </div>
          </div>
        </div>
        <div className="pt-32 basis-1/4">
          <div className="container mx-auto">
            <form>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </form>
            
            <div className="mt-7">
              <h2 className="text-4xl mb-4 sm:text-3xl uppercase font-serif text-gray-800">Date Range</h2>
              <div className="flex justify-between items-center">
                <input
                  type="date"
                  className="input input-bordered w-full max-w-xs"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                />
                <span className="mx-2">to</span>
                <input
                  type="date"
                  className="input input-bordered w-full max-w-xs"
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-7">
              <h2 className="text-4xl mb-4 sm:text-3xl uppercase font-serif text-gray-800">Price</h2>
              <input
                type="range"
                min="0"
                max="500000"
                value={priceRange[1]}
                className="range range-primary"
                onChange={e => setPriceRange([0, Number(e.target.value)])}
              />
              <p>Rp. {priceRange[1]}</p>
            </div>
            <div className="form-control mt-7">
              <label className="label cursor-pointer">
                <span className="text-4xl sm:text-3xl uppercase font-serif text-gray-800">Event Gratis</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500"
                  checked={isFreeEvent === true}
                  onChange={() => setIsFreeEvent(true)}
                />
              </label>
            </div>
            <div className="form-control mt-7">
              <label className="label cursor-pointer">
                <span className="text-4xl sm:text-3xl uppercase font-serif text-gray-800">Event Berbayar</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  checked={isFreeEvent === false}
                  onChange={() => setIsFreeEvent(false)}
                />
              </label>
            </div>
            <div className="form-control mt-7">
              <label className="label cursor-pointer">
                <span className="text-4xl sm:text-3xl uppercase font-serif text-gray-800">Semua Event</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-gray-500"
                  checked={isFreeEvent === null}
                  onChange={() => setIsFreeEvent(null)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventPage;
