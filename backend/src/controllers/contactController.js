// =====================================
// src/controllers/contactController.js
// ===================================== CONTACT CONTROLLER - HANDLES CONTACT FORM SUBMISSIONS

import { sendEmail } from "../services/emailService.js";

// ========================= CONTACT FORM HANDLER =========================
export const sendContact = async (req, res) => {
	const { name, email, message } = req.body;

	// ================= BASIC VALIDATION =================
	if (!name || !email || !message) {
		return res.status(400).json({
			success: false,
			error: "All fields are required",
		});
	}

	// ================= EMAIL VALIDATION =================
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!email.includes("@") || !emailRegex.test(email)) {
		return res.status(400).json({
			success: false,
			error: "Invalid email",
		});
	}

	// ================= MESSAGE VALIDATION =================
	if (message.length < 10) {
		return res.status(400).json({
			success: false,
			error: "Message too short (minimum 10 characters)",
		});
	}

	// ================= SEND EMAIL =================
	try {
		await sendEmail({ name, email, message });

		return res.status(200).json({
			success: true,
			message: "Message sent successfully",
		});
	} catch (error) {
		console.error("Email error:", error);

		return res.status(500).json({
			success: false,
			error: "Failed to send message",
		});
	}
};
