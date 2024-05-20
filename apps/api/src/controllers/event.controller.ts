import { Request, Response } from 'express';
import prisma from '@/prisma';
import { responseError } from '@/helpers/responseError';

// Create Event
export const createEvent = async (req: Request, res: Response) => {
    try {
      const {
        name, description, image, priceVip, priceRegular, quotaVip, quotaRegular, discount, kuotaDiscount, date, freeEvent, location, ticketsAvailable
      } = req.body;
      const organizerId = req.user?.id;
  
      if (!organizerId) throw new Error('User not authenticated');
  
      // Validasi field wajib
      if (!name || !description || freeEvent === undefined || !location || !date) {
        throw new Error('Missing required fields: name, description, freeEvent, location, date');
      }
  
      // Validasi field ticketsAvailable jika freeEvent true
      if (freeEvent && (ticketsAvailable === undefined || ticketsAvailable === null)) {
        throw new Error('Missing required field: ticketsAvailable for free event');
      }
  
      // Atur nilai default untuk field opsional jika tidak ada dalam request body
      const eventData = {
        name,
        description,
        image: image || '',
        priceVip: priceVip || 0,
        priceRegular: priceRegular || 0,
        quotaVip: quotaVip || 0,
        quotaRegular: quotaRegular || 0,
        discount: discount || 0,
        kuotaDiscount: kuotaDiscount || 0,
        date: new Date(date),
        freeEvent,
        location,
        organizerId,
        ticketsAvailable: freeEvent ? ticketsAvailable : (quotaVip || 0) + (quotaRegular || 0)
      };
  
      const event = await prisma.event.create({
        data: eventData
      });
  
      res.status(201).send({
        status: 'ok',
        message: 'Event created successfully!',
        event
      });
    } catch (err) {
      responseError(res, err);
    }
  };
  
  
// Get All Events
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany();
    res.status(200).send({
      status: 'ok',
      events
    });
  } catch (err) {
    responseError(res, err);
  }
};

// Get Event by ID
export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await prisma.event.findUnique({
      where: { id: parseInt(id) }
    });

    if (!event) throw new Error('Event not found');

    res.status(200).send({
      status: 'ok',
      event
    });
  } catch (err) {
    responseError(res, err);
  }
};

// Update Event
export const updateEvent = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, description, image, priceVip, priceRegular, quotaVip, quotaRegular, discount, kuotaDiscount, date, freeEvent, location } = req.body;
  
      // Buat objek data untuk diperbarui hanya jika field disediakan
      const updateData: any = {};
      if (name !== undefined) updateData.name = name;
      if (description !== undefined) updateData.description = description;
      if (image !== undefined) updateData.image = image;
      if (priceVip !== undefined) updateData.priceVip = priceVip;
      if (priceRegular !== undefined) updateData.priceRegular = priceRegular;
      if (quotaVip !== undefined) updateData.quotaVip = quotaVip;
      if (quotaRegular !== undefined) updateData.quotaRegular = quotaRegular;
      if (discount !== undefined) updateData.discount = discount;
      if (kuotaDiscount !== undefined) updateData.kuotaDiscount = kuotaDiscount;
      if (date !== undefined) updateData.date = new Date(date);
      if (freeEvent !== undefined) updateData.freeEvent = freeEvent;
      if (location !== undefined) updateData.location = location;
  
      const event = await prisma.event.update({
        where: { id: parseInt(id) },
        data: updateData
      });
  
      res.status(200).send({
        status: 'ok',
        message: 'Event updated successfully!',
        event
      });
    } catch (err) {
      responseError(res, err);
    }
  };

// Delete Event
export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.event.delete({
      where: { id: parseInt(id) }
    });

    res.status(200).send({
      status: 'ok',
      message: 'Event deleted successfully!'
    });
  } catch (err) {
    responseError(res, err);
  }
};

// Get Events by Organizer ID
export const getEventsByOrganizer = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }
    
    const organizerId = req.user.id;
    console.log(`Organizer ID: ${organizerId}`);

    const events = await prisma.event.findMany({
      where: { organizerId: organizerId },
      include: {
        organizer: {
          select: {
            name: true,
          },
        },
      },
    });

    console.log('Events:', events);

    res.status(200).json({
      status: 'ok',
      events,
    });
  } catch (err) {
    console.error('Error fetching events:', err);
    responseError(res, err);
  }
};


// Update Event Image
export const updateEventImage = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { file } = req;
  
      if (!file) throw "No File Uploaded!";
  
      const imageUrl = `http://localhost:8000/public/images/${file.filename}`;
  
      const event = await prisma.event.update({
        where: { id: parseInt(id) },
        data: {
          image: imageUrl,
        },
      });
  
      res.status(200).send({
        status: 'ok',
        message: 'Event image updated successfully!',
        event,
      });
    } catch (err) {
      responseError(res, err);
    }
  };
  