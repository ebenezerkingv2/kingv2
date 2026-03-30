// =====================================
// src/services/emailService.js
// ===================================== EMAIL SERVICE USING RESEND

import { Resend } from "resend";
import env from "../config/env.js";

const resend = new Resend(process.env.RESEND_API_KEY);

// ========================= SEND EMAIL =========================
export const sendEmail = async ({ name, email, message }) => {
	try {
		const result = await resend.emails.send({
			from: `Portfolio Contact <${env.resendSender}>`,
			to: env.resendRecipient,
			subject: `New Contact Message from ${name}`,
			html: `
      <div style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px; color: #333;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h2 style="color: #4a00e0; text-align: center;">New Contact Form Submission</h2>
          <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
          <p style="font-size: 16px;"><strong>Message:</strong></p>
          <p style="font-size: 16px; line-height: 1.5; border-left: 3px solid #4a00e0; padding-left: 10px;">${message}</p>
          <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
          <p style="font-size: 14px; color: #666; text-align: center;">This message was sent from your portfolio contact form.</p>
        </div>
      </div>
    `,
		});
		console.log("✅ Email sent via Resend:", result);
	} catch (error) {
		console.error("Email error (Resend):", error.response || error);
		throw error;
	}
};
