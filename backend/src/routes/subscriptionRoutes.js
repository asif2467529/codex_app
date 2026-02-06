import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import User from '../models/User.js';

const router = Router();

router.post('/upgrade', authMiddleware, async (req, res, next) => {
  try {
    const { plan = 'monthly', planExpiry } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { plan, planExpiry: planExpiry ? new Date(planExpiry) : new Date(Date.now() + 30 * 86400000) },
      { new: true }
    );

    return res.status(200).json({ message: 'Subscription upgraded (mock).', user });
  } catch (error) {
    return next(error);
  }
});

router.post('/create-session', authMiddleware, async (req, res) => {
  return res.status(200).json({ sessionId: 'dummy-session', status: 'created' });
});

export default router;
