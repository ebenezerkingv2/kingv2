// =====================================
// src/services/emailService.js
// ===================================== EMAIL SERVICE USING SENDGRID

import sgMail from "@sendgrid/mail";
import env from "../config/env.js";

sgMail.setApiKey(env.sendgridApiKey);

export const sendEmail = async ({ name, email, message }) => {
	try {
		await sgMail.send({
			to: env.sendgridRecipient,
			from: env.sendgridSender,
			subject: `New Contact Message from ${name}`,
			html: `
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8; padding:20px; font-family: Arial, sans-serif;">
        <tr>
          <td align="center">
            <table width="100%" max-width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; padding:30px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1);">
              
              <!-- Gradient Header -->
              <tr>
                <td align="center" style="background: linear-gradient(90deg, #4a00e0, #8e2de2); border-radius:12px 12px 0 0; padding:20px 0;">
                  <h2 style="color:#ffffff; margin:0; font-size:24px;">New Contact Form Submission</h2>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:20px 0;">
                  <p style="margin:5px 0; font-size:16px;"><strong>Name:</strong> ${name}</p>
                  <p style="margin:5px 0; font-size:16px;"><strong>Email:</strong> ${email}</p>
                  <p style="margin:5px 0; font-size:16px;"><strong>Message:</strong></p>
                  <p style="margin:5px 0; font-size:16px; line-height:1.5; border-left:4px solid #8e2de2; padding-left:12px;">
                    ${message}
                  </p>
                </td>
              </tr>

              <!-- CTA Button -->
              <tr>
                <td align="center" style="padding:20px 0;">
                  <a href="mailto:${email}" 
                     style="background-color:#4a00e0; color:#ffffff; text-decoration:none; padding:12px 25px; border-radius:6px; display:inline-block; font-weight:bold;">
                     Reply to Sender
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding-top:20px; text-align:center;">
                  <hr style="border:0; border-top:1px solid #ddd; margin-bottom:10px;">
                  <p style="font-size:12px; color:#888; margin:0;">
                    This message was sent from your portfolio contact form.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
      `,
		});

		console.log("✅ Styled email sent via SendGrid");
	} catch (error) {
		console.error("Email error (SendGrid):", error);
		throw error;
	}
};
