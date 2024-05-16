// activeUserMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import prisma from '@/prisma';
import { responseError } from '@/helpers/responseError';

const userActive = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Mendapatkan ID pengguna dari token JWT yang terautentikasi
    const userId = req.user?.id;

    // Cek apakah pengguna aktif berdasarkan ID
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    // Jika pengguna tidak ditemukan atau tidak aktif, kirim tanggapan kesalahan
    if (!user || !user.isActive) {
        alert('User not active, please verify your account')
      throw new Error('User not active, please verify your account');
    }

    // Jika pengguna ditemukan dan aktif, lanjutkan dengan proses selanjutnya
    next();
  } catch (err) {
    responseError(res, err);
  }
};

export default userActive;
