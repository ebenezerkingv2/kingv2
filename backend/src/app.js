// =====================================
// src/app.js
// ===================================== APP SETUP

import express from "express";
import contactRoutes from "./routes/contactRoute.js";

const app = express();

// ========================= MIDDLEWARE =========================
app.use(express.json());

// ========================= ROUTES =========================
app.use("/api/contact", contactRoutes);

export default app;
