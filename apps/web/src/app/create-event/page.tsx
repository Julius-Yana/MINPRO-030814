"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const EventManager = () => {
  const [file, setFile] = useState<File | null>(null);
  const [eventId, setEventId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    date: Yup.date().required('Required'),
    location: Yup.string().required('Required'),
    ticketsAvailable: Yup.number().test('ticketsAvailable', 'Invalid tickets available', function(value) {
      const { freeEvent } = this.parent; // Accessing the 'freeEvent' value from formik data
      if (freeEvent) {
        return Yup.number().required('Required for free events').min(1, 'Must be at least 1').isValidSync(value);
      }
      return true; // If not a free event, validation is bypassed
    })
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      image: '',
      priceVip: '',
      priceRegular: '',
      quotaVip: '',
      quotaRegular: '',
      discount: '',
      kuotaDiscount: '',
      date: '',
      freeEvent: false,
      location: '',
      ticketsAvailable: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        let eventData: any = {
          name: values.name,
          description: values.description,
          image: values.image,
          date: new Date(values.date),
          freeEvent: values.freeEvent,
          location: values.location
        };

        if (values.freeEvent) {
          eventData.ticketsAvailable = Number(values.ticketsAvailable);
        } else {
          eventData = {
            ...eventData,
            priceVip: Number(values.priceVip),
            priceRegular: Number(values.priceRegular),
            quotaVip: Number(values.quotaVip),
            quotaRegular: Number(values.quotaRegular),
            discount: Number(values.discount),
            kuotaDiscount: Number(values.kuotaDiscount),
            ticketsAvailable: Number(values.quotaVip) + Number(values.quotaRegular)
          };
        }

        const response = await axios.post('http://localhost:8000/api/event', eventData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setEventId(response.data.event.id);

        if (file) {
          const formData = new FormData();
          formData.append('file', file);

          await axios.patch(`http://localhost:8000/api/event/${response.data.event.id}`, formData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'multipart/form-data',
            },
          });
          alert('Event created and image uploaded successfully!');
        } else {
          alert('Event created successfully, but no image uploaded.');
        }
      } catch (error) {
        setError('Error creating event or uploading image');
        console.error('Error:', error);
      }
    }
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Create Event</h1>
          {error && <div className="text-red-600 mb-4">{error}</div>}
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
                  <label className="block text-sm font-medium">Discount Quota</label>
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

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Create Event and Upload Image
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventManager;
