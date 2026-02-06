import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { subscriptionCheck } from '../middlewares/subscriptionCheck.js';
import { callFeature } from '../services/aiService.js';

const router = Router();

router.post('/smart-note', authMiddleware, subscriptionCheck('smart-note'), async (req, res, next) => {
  try {
    const data = await callFeature('smart-note', req.body);
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
});

router.post('/summary', authMiddleware, subscriptionCheck('summary'), async (req, res, next) => {
  try {
    const data = await callFeature('summary', req.body);
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
});

router.post('/mcq', authMiddleware, subscriptionCheck('mcq'), async (req, res, next) => {
  try {
    const data = await callFeature('mcq', req.body);
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
});

router.post('/translate', authMiddleware, subscriptionCheck('translate'), async (req, res, next) => {
  try {
    const data = await callFeature('translate', req.body);
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
});

export default router;
