"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface EditEventModalProps {
  event: Event;
  onClose: () => void;
  onUpdate: () => void;
}

const EditEventModal: React.FC<EditEventModalProps> = ({ event, onClose, onUpdate }) => {
  const [file, setFile] = useState<File | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    date: Yup.date().required('Required'),
    location: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: event.name,
      description: event.description,
      date: event.date,
      location: event.location,
      priceVip: event.priceVip,
      priceRegular: event.priceRegular,
      quotaVip: event.quotaVip,
      quotaRegular: event.quotaRegular,
      discount: event.discount,
      kuotaDiscount: event.kuotaDiscount,
      freeEvent: event.freeEvent,
      ticketsAvailable: event.ticketsAvailable,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setShowConfirmation(true);
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    try {
      const updatedEvent = {
        ...formik.values,
        ticketsAvailable: formik.values.freeEvent ? formik.values.ticketsAvailable : (formik.values.quotaVip + formik.values.quotaRegular),
      };

      await axios.put(`http://localhost:8000/api/event/${event.id}`, updatedEvent, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        await axios.patch(`http://localhost:8000/api/event/${event.id}`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      setSuccess(true);
      onUpdate();
    } catch (error) {
      setSuccess(false);
      console.error('Error:', error);
    } finally {
      setShowConfirmation(false);
      setTimeout(() => {
        setSuccess(null);
        onClose();
      }, 2000); // Pop-up will close after 2 seconds
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 relative">
        <button className="absolute top-2 right-2 text-red-600 close-button" onClick={onClose}>
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Event Name</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-600">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-600">{formik.errors.description}</div>
            ) : null}
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id="location"
              name="location"
              type="text"
              value={formik.values.location}
              onChange={formik.handleChange}
            />
            {formik.touched.location && formik.errors.location ? (
              <div className="text-red-600">{formik.errors.location}</div>
            ) : null}
          </div>
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id="date"
              name="date"
              type="date"
              value={formik.values.date}
              onChange={formik.handleChange}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-red-600">{formik.errors.date}</div>
            ) : null}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="freeEvent"
              name="freeEvent"
              checked={formik.values.freeEvent}
              onChange={formik.handleChange}
              className="mr-2"
            />
            <label htmlFor="freeEvent" className="block text-sm font-medium">Free Event</label>
          </div>
          {formik.values.freeEvent ? (
            <div>
              <label className="block text-sm font-medium">Tickets Available</label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="ticketsAvailable"
                name="ticketsAvailable"
                type="number"
                value={formik.values.ticketsAvailable}
                onChange={formik.handleChange}
              />
              {formik.touched.ticketsAvailable && formik.errors.ticketsAvailable ? (
                <div className="text-red-600">{formik.errors.ticketsAvailable}</div>
              ) : null}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">VIP Price</label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id="priceVip"
                  name="priceVip"
                  type="number"
                  value={formik.values.priceVip}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Regular Price</label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id="priceRegular"
                  name="priceRegular"
                  type="number"
                  value={formik.values.priceRegular}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">VIP Quota</label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id="quotaVip"
                  name="quotaVip"
                  type="number"
                  value={formik.values.quotaVip}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Regular Quota</label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id="quotaRegular"
                  name="quotaRegular"
                  type="number"
                  value={formik.values.quotaRegular}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Discount</label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id="discount"
                  name="discount"
                  type="number"
                  value={formik.values.discount}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Quota for Discount</label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id="kuotaDiscount"
                  name="kuotaDiscount"
                  type="number"
                  value={formik.values.kuotaDiscount}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium">Upload Image</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => setShowConfirmation(true)}>
            Update Event and Upload Image
          </button>
          {showConfirmation && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                <p>Apakah Anda yakin ingin menyimpan perubahan?</p>
                <div className="mt-4 flex justify-center">
                  <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded mr-2">Ya</button>
                  <button onClick={() => setShowConfirmation(false)} className="bg-red-500 text-white py-2 px-4 rounded">Tidak</button>
                </div>
              </div>
            </div>
          )}
          {success !== null && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className={`bg-white p-6 rounded-lg shadow-lg w-1/2 flex items-center justify-center ${success ? 'ring-4 ring-red-500' : 'ring-4 ring-green-500'}`}>
                {success ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 animate-shake" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM5 9a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0V9zm11-3a1 1 0 1 1-2 0V9a1 1 0 0 1-2 0V6a1 1 0 0 1-2 0 1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-8l-2 2 4 4 8-8-1.5-1.5L10 13.5 9 12.5l-2-2L7 8.5l-2 2z" />
                  </svg>
                )}
                <p className="ml-4">{success ? 'Failed to update event' : 'Event updated successfully!'}</p>
                <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded ml-4">Close</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditEventModal;
