import { Request, Response } from 'express';
import prisma from '@/prisma';
import { genSalt, hash, compare } from 'bcrypt'
import { responseError } from '@/helpers/responseError';
import { generateToken } from '@/helpers/generateToken';
import { Referral } from '@prisma/client';

export const regUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, referralInput } = req.body
    const salt = await genSalt(10)
    const hashPassword = await hash(password, salt)
    const newReferralCode: any = await generateReferralCode()

    const users = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,

      }
    })

    await prisma.referral.create({
      data: {
        referralCode: newReferralCode,
        userId: users.id
      }
    })

    res.status(201).send({
      status: 'ok',
      message: 'User created!',
      users,
      newReferralCode,
    })
  } catch (err) {
    responseError(res, err)
  }
}

export async function generateReferralCode() {
  const word = "abcdefghijklmnopqrstuvwxyz123456789"
  const referralLength = 6
  let referralCode = ""

  for (let i = 0; i < referralLength; i++) {
    referralCode += word.charAt(Math.floor(Math.random() * word.length))
  }

  const existingReferral = await prisma.referral.findUnique({
    where: {
      referralCode
    }
  })

  if (existingReferral!) {
    return generateReferralCode
  }

  return referralCode

}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const users = await prisma.user.findUnique({
      where: { email }
    })

    if (!users) throw 'user not found!'

    const isValidPass = await compare(password, users.password)
    if (!isValidPass) throw 'wrong password!'

    const payload = {
      id: users.id
    }
    const token = generateToken(payload)

    res.status(200).send({
      status: 'ok',
      token,
      users
    })

  } catch (err) {
    responseError(res, err)
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        referral: true
      }
    })
    res.status(200).send({
      status: 'ok',
      users,


    })
  } catch (err) {
    responseError(res, err)
  }
}

export const referralPoint = async (req: Request, res: Response) => {
  try {
    const { referralCode } = req.body;

    // Cek login guyss
    const loggedInUser = req.user;
    if (!loggedInUser) throw new Error("User not authenticated");

    // Cari referral berdasarkan referralCode
    const referral = await prisma.referral.findUnique({
      where: { referralCode },
    });
    if (!referral) throw new Error("Referral Code Not Found");

    // Cari berapa Point yang sudah ada untuk userId yang sama
    const existingPoint = await prisma.point.findFirst({
      where: { userId: referral.userId },
    });

    if (existingPoint) {
      // Jika sudah ada, update jumlah poin yang ada dengan menambahkan 10000
      await prisma.point.update({
        where: { id: existingPoint.id },
        data: {
          Amount: existingPoint.Amount + 10000, 
          expirationDate: new Date(existingPoint.expirationDate.getTime() + 3 * 30 * 24 * 60 * 60 * 1000)
        },
      });
    } else {
      // Jika belum ada, buat entri baru di tabel Point
      await prisma.point.create({
        data: {
          Amount: 10000, 
          expirationDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000), 
          userId: referral.userId, 
        },
      });
    }

    const existingDiscount = await prisma.discount.findFirst({
      where: { userId: loggedInUser.id },
    });

    if (existingDiscount) {
      // Jika sudah ada, update jumlah poin yang ada dengan menambahkan 10000
      await prisma.discount.update({
        where: { id: existingDiscount.id },
        data: {
          discount: existingDiscount.discount + 10, 
          expirationDate: new Date(existingDiscount.expirationDate.getTime() + 3 * 30 * 24 * 60 * 60 * 1000)
        },
      });
    } else {
      // Jika belum ada, buat entri baru di tabel Point
      await prisma.discount.create({
        data: {
          discount: 10, 
          expirationDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000), 
          userId: loggedInUser.id, 
        },
      });
    }

    res.status(200).send({
      status: "ok",
      message: "Referral Point added successfully!",
    });
  } catch (err) {
    responseError(res, err);
  }
};

export const getUserPoint = async (req: Request, res: Response) => {
  try {
    // Cek login dulu guys
    const loggedInUser = req.user;
    if (!loggedInUser) throw new Error("User not authenticated");
    
  
    const point = await prisma.point.findFirst({
      where: {
        userId : loggedInUser.id
      }
    })
    res.status(200).send({
      status: 'ok',
      loggedInUser,
      point
    })
  } catch (err) {
    responseError(res, err)
  }
}

export const getUserDiscount = async (req: Request, res: Response) => {
  try {
    // Cek login dulu guys
    const loggedInUser = req.user;
    if (!loggedInUser) throw new Error("User not authenticated");
    
  
    const discount = await prisma.discount.findFirst({
      where: {
        userId : loggedInUser.id
      }
    })
    res.status(200).send({
      status: 'ok',
      loggedInUser,
      discount
    })
  } catch (err) {
    responseError(res, err)
  }
}
