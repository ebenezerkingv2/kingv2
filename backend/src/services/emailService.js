// =====================================
// src/services/emailService.js
// ===================================== EMAIL SERVICE - HANDLES SENDING EMAILS (e.g. CONTACT FORM)

import nodemailer from "nodemailer";
import env from "../config/env.js";

// ========================= TRANSPORTER =========================
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: env.gmail.user,
		pass: env.gmail.pass,
	},
});

// ========================= SEND EMAIL =========================
export const sendEmail = async ({ name, email, message }) => {
	const mailOptions = {
		from: `"kingv2's Contact Form" <${process.env.gmail.user}>`,
		to: env.gmail.user,
		replyTo: email,
		subject: `New Contact Message from ${name}`,
		html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
	};

	await transporter.sendMail(mailOptions);
};
