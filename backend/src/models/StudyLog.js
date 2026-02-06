import mongoose from 'mongoose';

const studyLogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subject: { type: String, required: true },
    topic: { type: String, required: true },
    date: { type: Date, required: true },
    duration: { type: Number, required: true },
    completionStatus: { type: String, enum: ['pending', 'completed'], default: 'completed' },
  },
  { timestamps: true }
);

export default mongoose.model('StudyLog', studyLogSchema);
