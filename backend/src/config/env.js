// =====================================
// src/config/env.js
// ===================================== ENVIRONMENT VARIABLES WRAPPER

import dotenv from "dotenv";

dotenv.config();

const env = {
	PORT: process.env.PORT,

	mongoURI: process.env.MONGO_URI,

	gmail: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASS,
	},
};

export default env;
