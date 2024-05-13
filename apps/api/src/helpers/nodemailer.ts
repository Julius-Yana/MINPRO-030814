import nodemailer from "nodemailer"

export const transporter =  nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "kitatiketin@gmail.com",
        pass: "ydhc dmxs cguv jfcc"
    }
})