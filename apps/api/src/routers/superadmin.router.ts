import { Router } from 'express';
import { validateRegister } from '@/middlewares/validator';
import { createUser, deleteUser, getUsers, updateActiveStatus, updateRole, updateUser } from '@/controllers/admin.controllers';

const superadminRouter = Router();

// Get all users by superadmin
superadminRouter.get('/users', getUsers);

// Create a new user by superadmin
superadminRouter.post('/users', validateRegister, createUser);

// Update user details by superadmin
superadminRouter.put('/users/:userId', updateUser);

// Update user role by superadmin
superadminRouter.put('/users/:userId/role', updateRole);

// Update user active status by superadmin
superadminRouter.put('/users/:userId/active', updateActiveStatus);

// Delete user by superadmin
superadminRouter.delete('/users/:userId', deleteUser);

export { superadminRouter };
