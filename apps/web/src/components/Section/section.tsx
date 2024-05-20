'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

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

const Section = () => {
  const [events, setEvents] = useState<Event[]>([]);

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

  return (
    <div className="mt-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {event.image && (
                <div className="w-full h-60 relative">
                  <Image
                    src={event.image}
                    alt={event.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-4">
                <h1 className="text-2xl font-bold uppercase mb-2 text-blue-700">{event.name}</h1>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="text-gray-700 mb-4">
                  <p className="text-lg"><strong>Date:</strong> <span className="text-black">{new Date(event.date).toLocaleDateString()}</span></p>
                  <p className="text-lg"><strong>Location:</strong> <span className="text-black">{event.location}</span></p>
                  {event.freeEvent ? (
                    <p className="text-lg font-bold text-green-600">Free Event</p>
                  ) : (
                    <>
                      {event.discount && event.kuotaDiscount && (
                        <p className="text-lg"><strong>Discount:</strong> <span className="text-red-500">{event.discount}%</span> (Kuota: <span className="text-red-500">{event.kuotaDiscount}</span>)</p>
                      )}
                      {event.priceRegular && (
                        <p className="text-lg"><strong>Regular Price:</strong> <span className="text-black">Rp {event.priceRegular.toLocaleString()}</span></p>
                      )}
                      {event.priceVip && (
                        <p className="text-lg"><strong>VIP Price:</strong> <span className="text-black">Rp {event.priceVip.toLocaleString()}</span></p>
                      )}
                    </>
                  )}
                </div>
                <Link href={`/events/${event.id}`}>
                  <p className="inline-block px-5 py-2 border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition-all ease-in duration-200 rounded-lg">
                    {event.freeEvent ? 'View Event' : 'Buy Ticket'}
                  </p>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No events available</p>
        )}
      </div>
    </div>
  );
};

export default Section;
