import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/upload', authMiddleware, async (req, res) => {
  // TODO: Replace with real file storage (S3/Cloudinary).
  return res.status(200).json({
    fileUrl: 'https://files.example.com/mock-file',
    type: req.body?.type || 'unknown',
  });
});

export default router;
