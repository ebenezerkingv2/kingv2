// =====================================
// src/config/env.js
// ===================================== ENVIRONMENT VARIABLES WRAPPER

import dotenv from "dotenv";

dotenv.config();

// =====================================
const env = {
	PORT: process.env.PORT,
	mongoURI: process.env.MONGO_URI,
	resendApiKey: process.env.RESEND_API_KEY,
	resendSender: process.env.RESEND_SENDER,
	resendRecipient: process.env.RESEND_RECIPIENT,
};

export default env;
