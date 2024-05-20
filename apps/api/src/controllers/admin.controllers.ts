import { Request, Response } from 'express';
import prisma from '@/prisma';
import { genSalt, hash, compare } from 'bcrypt';
import { responseError } from '@/helpers/responseError';
import { generateToken } from '@/helpers/generateToken';
import { generateReferralCode } from './user.controller';

// Controller untuk mendapatkan daftar pengguna
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        referral: true,
      },
    });
    res.status(200).json({ status: 'success', users });
  } catch (err) {
    responseError(res, err);
  }
};

// Controller untuk membuat pengguna baru oleh superadmin
export const createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password, image } = req.body;
      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);
      const newReferralCode: any = await generateReferralCode();
  
      const users = await prisma.user.create({
        data: {
          name,
          email,
          password: hashPassword,
          image,
        },
      });
  
      await prisma.referral.create({
        data: {
          referralCode: newReferralCode,
          userId: users.id,
        },
      });
  
      // Token tidak memerlukan verifikasi payload untuk superadmin
      const token = generateToken({ id: users.id });
  
      res.status(201).send({
        status: 'ok',
        message: 'User created!',
        users,
        newReferralCode,
        token,
      });
    } catch (err) {
      responseError(res, err);
    }
  };
  

  export const updateUser = async (req: Request, res: Response) => {
    try {
      const { userId, name, email, role, isActive } = req.body;
      
      const existingUser = await prisma.user.findUnique({
        where: { id: userId },
      });
  
      if (!existingUser) {
        throw new Error('User not found!');
      }
  
      // Update user data
      const updatedUserData: any = {};
      if (name) updatedUserData.name = name;
      if (email) updatedUserData.email = email;
      if (role) updatedUserData.role = role; // Tambahkan kondisi untuk update peran
      if (isActive !== undefined) updatedUserData.isActive = isActive; // Tambahkan kondisi untuk update status aktif
  
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updatedUserData,
      });
  
      res.status(200).json({ status: 'success', message: 'User updated!', user: updatedUser });
    } catch (err) {
      responseError(res, err);
    }
  };

  // Controller untuk menghapus pengguna
export const deleteUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      console.log(`Received delete request for userId: ${userId}`);
  
      const existingUser = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
      });
  
      if (!existingUser) {
        console.log('User not found!');
        return res.status(404).json({ status: 'error', message: 'User not found!' });
      }
  
      // Hapus semua entitas terkait yang mengacu pada userId
      await prisma.referral.deleteMany({
        where: { userId: parseInt(userId) },
      });
  
      await prisma.point.deleteMany({
        where: { userId: parseInt(userId) },
      });
  
      await prisma.discount.deleteMany({
        where: { userId: parseInt(userId) },
      });
  
      await prisma.event.updateMany({
        where: { organizerId: parseInt(userId) },
        data: { organizerId: null }, // Atur organizerId menjadi null atau penanganan yang sesuai
      });
  
      await prisma.ticket.deleteMany({
        where: { userId: parseInt(userId) },
      });
  
      await prisma.transaction.deleteMany({
        where: { userId: parseInt(userId) },
      });
  
      // Setelah menghapus semua entitas terkait, hapus pengguna
      await prisma.user.delete({
        where: { id: parseInt(userId) },
      });
  
      res.status(200).json({ status: 'success', message: 'User deleted!' });
    } catch (err) {
      console.error('Error deleting user:', err);
      responseError(res, err);
    }
  };

// Controller untuk mengupdate peran pengguna oleh superadmin
export const updateRole = async (req: Request, res: Response) => {
    try {
      const { userId, role } = req.body;
      
      const existingUser = await prisma.user.findUnique({
        where: { id: userId },
      });
  
      if (!existingUser) {
        throw new Error('User not found!');
      }
  
      // Update peran pengguna
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { role },
      });
  
      res.status(200).json({ status: 'success', message: 'User role updated!', user: updatedUser });
    } catch (err) {
      responseError(res, err);
    }
  };
  
  // Controller untuk mengupdate status aktif pengguna oleh superadmin
  export const updateActiveStatus = async (req: Request, res: Response) => {
    try {
      const { userId, isActive } = req.body;
      
      const existingUser = await prisma.user.findUnique({
        where: { id: userId },
      });
  
      if (!existingUser) {
        throw new Error('User not found!');
      }
  
      // Update status aktif pengguna
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { isActive },
      });
  
      res.status(200).json({ status: 'success', message: 'User active status updated!', user: updatedUser });
    } catch (err) {
      responseError(res, err);
    }
  };