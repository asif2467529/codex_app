import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import StudyLog from '../models/StudyLog.js';

const router = Router();

router.post('/', authMiddleware, async (req, res, next) => {
  try {
    const log = await StudyLog.create({ ...req.body, userId: req.user.userId });
    return res.status(201).json(log);
  } catch (error) {
    return next(error);
  }
});

router.get('/', authMiddleware, async (req, res, next) => {
  try {
    const logs = await StudyLog.find({ userId: req.user.userId }).sort({ date: -1 });
    return res.status(200).json(logs);
  } catch (error) {
    return next(error);
  }
});

router.put('/:id', authMiddleware, async (req, res, next) => {
  try {
    const log = await StudyLog.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    return res.status(200).json(log);
  } catch (error) {
    return next(error);
  }
});

router.delete('/:id', authMiddleware, async (req, res, next) => {
  try {
    await StudyLog.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
});

export default router;
