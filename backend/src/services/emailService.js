// =====================================
// src/services/emailService.js
// ===================================== EMAIL SERVICE USING RESEND

import { Resend } from "resend";
import env from "../config/env.js";

const resend = new Resend(process.env.RESEND_API_KEY);

// ========================= SEND EMAIL =========================
export const sendEmail = async ({ name, email, message }) => {
	try {
		await resend.emails.send({
			from: `Portfolio Contact <${env.resendSender}>`,
			to: env.resendRecipient,
			subject: `New Contact Message from ${name}`,
			html: `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: auto;
      padding: 20px;
      background-color: #f8f9fa;
      border: 1px solid #ddd;
      border-radius: 8px;
    ">
      <h2 style="color: #4a90e2; text-align: center;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> <span style="color: #333;">${name}</span></p>
      <p><strong>Email:</strong> <span style="color: #333;">${email}</span></p>
      <p><strong>Message:</strong></p>
      <p style="background-color: #fff; padding: 10px; border-left: 4px solid #4a90e2; border-radius: 4px;">
        ${message}
      </p>
      <footer style="margin-top: 20px; font-size: 12px; color: #666; text-align: center;">
        This message was sent from your Portfolio Contact Form
      </footer>
    </div>
  `,
		});
		console.log("✅ Email sent via Resend:", response);
	} catch (error) {
		console.error("Email error (Resend):", error);
		throw error;
	}
};