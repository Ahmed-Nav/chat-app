import express from'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();

app.use('/api/auth', authRoutes);

app.listen(300, () => console.log("Server running on port: 3000"));