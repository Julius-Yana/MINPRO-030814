import { Router } from 'express';
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent, getEventsByOrganizer, updateEventImage } from '@/controllers/event.controller';
import { verifyToken } from '@/middlewares/verifyToken';
import { uploader } from '@/helpers/uploader';
 

const eventRouter = Router();

eventRouter.post('/', verifyToken, createEvent);
eventRouter.get('/', getAllEvents);
eventRouter.get('/organizer', verifyToken, getEventsByOrganizer);
eventRouter.get('/:id', getEventById);
eventRouter.put('/:id', verifyToken, updateEvent);
eventRouter.delete('/:id', verifyToken, deleteEvent);
eventRouter.patch('/:id', verifyToken, uploader("IMG", "/images").single("file"), updateEventImage)


export default eventRouter;
