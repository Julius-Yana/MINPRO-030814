"use client";

import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import EditEventModal from '@/components/edit-event/EditEventModal';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Event {
  id: number;
  name: string;
  date: string;
  ticketsSold: number;
  ticketsAvailable: number;
  quotaVip: number;
  quotaRegular: number;
  revenue: number;
  discount: number;
  kuotaDiscount: number;
  freeEvent: boolean;
  organizer: {
    name: string;
  };
}

export default function Dashboard() {
  const [search, setSearch] = useState<string>('');
  const [freeEvents, setFreeEvents] = useState<Event[]>([]);
  const [paidEvents, setPaidEvents] = useState<Event[]>([]);
  const [filteredFreeEvents, setFilteredFreeEvents] = useState<Event[]>([]);
  const [filteredPaidEvents, setFilteredPaidEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    filterEvents();
  }, [search, freeEvents, paidEvents]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get<{ status: string; events: Event[] }>('http://localhost:8000/api/event/organizer', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.data && response.data.events) {
        const freeEventsData = response.data.events
          .filter(event => event.freeEvent)
          .map(event => ({
            ...event,
            ticketsSold: event.ticketsSold || 0,
            ticketsQuota: event.ticketsAvailable || 0, // Menggunakan ticketsAvailable untuk ticketsQuota
            quotaVip: 0,
            quotaRegular: 0,
            revenue: 0,
            discount: 0,
            kuotaDiscount: 0,
          }));

        const paidEventsData = response.data.events
          .filter(event => !event.freeEvent)
          .map(event => ({
            ...event,
            ticketsSold: event.ticketsSold || 0,
            ticketsQuota: (event.quotaVip || 0) + (event.quotaRegular || 0),
            quotaVip: event.quotaVip || 0,
            quotaRegular: event.quotaRegular || 0,
            revenue: event.revenue || 0,
            discount: event.discount || 0,
            kuotaDiscount: event.kuotaDiscount || 0,
          }));

        setFreeEvents(freeEventsData);
        setPaidEvents(paidEventsData);
        setFilteredFreeEvents(freeEventsData);
        setFilteredPaidEvents(paidEventsData);
      }
    } catch (error: any) {
      console.error('Error fetching events:', error);
      setError('Error fetching events: ' + (error.response?.data?.message || error.message));
    }
  };

  const filterEvents = () => {
    const filteredFree = freeEvents.filter(event =>
      event.name.toLowerCase().includes(search.toLowerCase())
    );
    const filteredPaid = paidEvents.filter(event =>
      event.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFreeEvents(filteredFree);
    setFilteredPaidEvents(filteredPaid);
  };

  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleDeleteEvent = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8000/api/event/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Event deleted successfully!');
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event');
    }
  };

  const pieOptions = {
    maintainAspectRatio: false,
    responsive: false,
    width: 200,
    height: 200,
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">My Events</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => (window.location.href = '/create-event')}
          >
            + Create Event
          </button>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search Events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mr-4"
          />
          <select className="p-2 border border-gray-300 rounded">
            <option>Start Date</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        <h3 className="text-2xl font-semibold mb-4">Free Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {filteredFreeEvents.map(event => (
            <div key={event.id} className="bg-white p-10 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold">{event.name}</h3>
                <span className="text-gray-500 text-lg">{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold">{event.ticketsSold}</p>
                  <p className="text-gray-600">Tickets Sold</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">Rp {event.revenue.toFixed(2)}</p>
                  <p className="text-gray-600">Revenue</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold">{event.ticketsQuota}</p>
                  <p className="text-gray-600">Total Quota</p>
                </div>
              </div>
              <div className="mb-6 flex justify-center">
                <Pie
                  data={{
                    labels: ['Sold', 'Available'],
                    datasets: [
                      {
                        data: [event.ticketsSold, event.ticketsQuota - event.ticketsSold],
                        backgroundColor: ['#36A2EB', '#FF6384'],
                        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
                      },
                    ],
                  }}
                  options={pieOptions}
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Organizer: {event.organizer.name}</p>
              </div>
              <div className="flex justify-between">
                <button className="text-blue-500 hover:underline text-lg" onClick={() => handleEditEvent(event)}>Manage Event</button>
                <button className="text-red-500 hover:underline text-lg" onClick={() => handleDeleteEvent(event.id)}>Delete Event</button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">Paid Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPaidEvents.map(event => (
            <div key={event.id} className="bg-white p-10 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold">{event.name}</h3>
                <span className="text-gray-500 text-lg">{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold">{event.ticketsSold}</p>
                  <p className="text-gray-600">Tickets Sold</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">Rp {event.revenue.toFixed(2)}</p>
                  <p className="text-gray-600">Revenue</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold">{event.ticketsQuota}</p>
                  <p className="text-gray-600">Total Quota</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{event.quotaRegular}</p>
                  <p className="text-gray-600">Regular Quota</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{event.quotaVip}</p>
                  <p className="text-gray-600">VIP Quota</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{event.discount}%</p>
                  <p className="text-gray-600">Discount</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{event.kuotaDiscount}</p>
                  <p className="text-gray-600">Discount Quota</p>
                </div>
              </div>
              <div className="mb-6 flex justify-center">
                <Pie
                  data={{
                    labels: ['Regular Available', 'VIP Available', 'Sold'],
                    datasets: [
                      {
                        data: [event.quotaRegular, event.quotaVip, event.ticketsSold],
                        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
                        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
                      },
                    ],
                  }}
                  options={pieOptions}
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Organizer: {event.organizer.name}</p>
              </div>
              <div className="flex justify-between">
                <button className="text-blue-500 hover:underline text-lg" onClick={() => handleEditEvent(event)}>Manage Event</button>
                <button className="text-red-500 hover:underline text-lg" onClick={() => handleDeleteEvent(event.id)}>Delete Event</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      {isModalOpen && selectedEvent && (
        <EditEventModal
          event={selectedEvent}
          onClose={handleCloseModal}
          onSave={fetchEvents} // Refresh events after saving
        />
      )}
    </div>
  );
}
