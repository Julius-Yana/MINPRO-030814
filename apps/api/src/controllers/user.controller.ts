import { Request, Response } from 'express';
import prisma from '@/prisma';
import { genSalt, hash, compare } from 'bcrypt'
import { responseError } from '@/helpers/responseError';
import { generateToken } from '@/helpers/generateToken';
import { Referral, Role } from '@prisma/client';
import path from 'path'
import fs from "fs"
import handlebars from 'handlebars'
import { transporter } from '@/helpers/nodemailer';


export const regUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, referall } = req.body;
    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);
    // const newReferralCode: any = await generateReferralCode();

    const users = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      }
    });

    if (referall) {
      const reffUser = await prisma.referral.findUnique({
        where: { referralCode: referall }
      });
      if (!reffUser) throw new Error("Wrong referral code");
    }

    // await prisma.referral.create({
    //   data: {
    //     // referralCode: newReferralCode,
    //     userId: users.id
    //   }
    // });

    const payload = {
      id: users.id,
      // ownerReferral: newReferralCode,
      inputReferral: referall || null
    };
    const token = generateToken(payload);
    const link = `http://localhost:3000/verifyusers/${token}`;

    const templatePath = path.join(__dirname, "../templates", "register.html");
    const templateSource = await fs.readFileSync(templatePath, 'utf-8');
    const compileTemplate = handlebars.compile(templateSource);
    const html = compileTemplate({
      name: users.name,
      link
    });

    await transporter.sendMail({
      from: "kitatiketin@gmail.com",
      to: users.email,
      subject: "Please Verify Your Account",
      html
    });

    res.status(201).send({
      status: 'ok',
      message: 'User created!',
      users,
      // newReferralCode,
      token
    });
  } catch (err) {
    responseError(res, err);
  }
};


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

};

export const verifyAccount = async (req: Request, res: Response) => {
  try {
    const newReferralCode: any = await generateReferralCode()
    const userId = req.user?.id;
    const inputReferral = req.user?.inputReferral;
    // const ownerReferral = req.user?.ownerReferral;

    if (!userId) {
      return res.status(400).send({ status: 'error', message: 'Invalid token' });
    }

    console.log(`Activating user: ${userId}`);

    const activateUser = await prisma.user.update({
      data: { isActive: true },
      where: { id: userId }
    });


    await prisma.referral.create({
      data: {
        referralCode: newReferralCode,
        userId: req.user?.id!
      }
    });

    if (inputReferral) {
      const reffUser = await prisma.referral.findUnique({
        where: { referralCode: inputReferral }
      });

      if (!reffUser) {
        throw new Error("Wrong referral code");
      }



      await prisma.point.create({
        data: {
          Amount: 10000,
          expirationDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000), // 3 months
          userId: reffUser.userId
        }
      });

      await prisma.discount.create({
        data: {
          discount: 10,
          expirationDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000), // 3 months
          userId: userId
        }
      });
    }
    res.status(200).send({ status: 'ok', message: 'Verify Account Success' });
  } catch (err) {
    responseError(res, err);
  }
};

export const getUserByToken = async (req: Request, res: Response) => {
  try {
    if (!req.user) throw new Error('User not authenticated');
    const userId = req.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { referral: true }
    });

    if (!user) throw new Error('User not found');

    res.status(200).send({
      status: 'ok',
      user: {
        name: user.name,
        email: user.email,
        image: user.image,
        role: user.role,
        referralCode: user.referral[0]?.referralCode || ''  // Mengambil referralCode
      },
    });
  } catch (err) {
    responseError(res, err);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('User not found!');
    }

    const isValidPass = await compare(password, user.password);
    if (!isValidPass) {
      throw new Error('Wrong password!');
    }

    if (!user.isActive) {
      throw new Error('User is not active, please verify your account!');
    }

    const payload = {
      id: user.id
    };
    const token = generateToken(payload);

    res.status(200).send({
      status: 'ok',
      token,
      user,
    });
  } catch (err) {
    responseError(res, err);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        referral: true,
        Point: true,
        Discount: true,
      }
    })
    res.status(200).send({
      status: 'ok',
      users,


    })
  } catch (err) {
    responseError(res, err)
  }
};

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

export const checkReferral = async (req: Request, res: Response) => {
  try {
    const { referralCode } = req.body;

    // Cari referral berdasarkan referralCode
    const referral = await prisma.referral.findUnique({
      where: { referralCode },
    });
    if (!referral) throw new Error("Referral Code Not Found");

    res.status(200).send({
      status: "ok",
      message: "Referral Code Exist, Please submit!",
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
        userId: loggedInUser.id
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
};

export const getUserDiscount = async (req: Request, res: Response) => {
  try {
    // Cek login dulu guys
    const loggedInUser = req.user;
    if (!loggedInUser) throw new Error("User not authenticated");


    const discount = await prisma.discount.findFirst({
      where: {
        userId: loggedInUser.id
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
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isOrganizer } = req.body;
    //cek token
    if (!req.user) throw new Error("User not authenticated");
    const userId = req.user.id;

    // Cek apakah pengguna ada berdasarkan ID token sudah sesuai belom yak
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!existingUser) throw new Error("User not found");

    // update sesuai body
    const updatedUserData: any = {};
    if (name) updatedUserData.name = name;
    if (email) updatedUserData.email = email;
    if (isOrganizer) updatedUserData.isOrganizer = isOrganizer
    if (password) {
      const salt = await genSalt(10);
      updatedUserData.password = await hash(password, salt);
    }

    // update prisma database bro
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updatedUserData,
    });

    res.status(200).send({
      status: "ok",
      message: "User updated successfully!",
      updatedUser,
    });
  } catch (err) {
    responseError(res, err);
  }
};

export const imageUser = async (req: Request, res: Response) => {
  try {
    const { file } = req
    if (!file) throw "No File Uploaded!"
    const imageUrl = `http://localhost:8000/public/images/${file.filename}`

    await prisma.user.update({
      data: {
        image: imageUrl
      },
      where: {
        id: req.user?.id
      }
    })

    res.status(200).send({
      status: 'ok',
      message: 'Upload image success'
    })

  } catch (err) {
    responseError(res, err);
  }
}

export const getUserImage = async (req: Request, res: Response) => {
  try {
    // Check if the user is authenticated
    if (!req.user) throw new Error("User not authenticated");

    // Get the user ID from the authenticated user
    const userId = req.user.id;

    // Fetch the user's data from the database
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { image: true }  // Only select the image field
    });

    if (!user) throw new Error("User not found");

    // Send the user's image URL in the response
    res.status(200).send({
      status: 'ok',
      image: user.image
    });
  } catch (err) {
    responseError(res, err);
  }
};

// Function to generate a random password
const generateRandomPassword = (length = 8) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found!',
      });
    }

    // Generate a new random password
    const newPassword = generateRandomPassword();
    const salt = await genSalt(10);
    const hashedPassword = await hash(newPassword, salt);

    // Update the user's password with the new hashed password
    await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
      },
    });

    const templatePath = path.join(__dirname, "../templates", "newPassword.html");
    const templateSource = fs.readFileSync(templatePath, 'utf-8');
    const compileTemplate = handlebars.compile(templateSource);
    const html = compileTemplate({
      name: user.name,
      newPassword,
    });

    await transporter.sendMail({
      from: "kitatiketin@gmail.com",
      to: user.email,
      subject: "Your New Password",
      html,
    });

    return res.status(200).json({
      status: 'ok',
      message: 'A new password has been sent to your email.',
    });
  } catch (err) {
    return responseError(res, err);
  }
};
