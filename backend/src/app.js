import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import fileRoutes from './routes/fileRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import studyLogRoutes from './routes/studyLogRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { rateLimiter } from './middlewares/rateLimiter.js';

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(rateLimiter);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/study/log', studyLogRoutes);

app.use(errorHandler);

export default app;
