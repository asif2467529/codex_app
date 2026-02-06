import mongoose from 'mongoose';

const usageSchema = new mongoose.Schema(
  {
    featureKey: { type: String, required: true },
    count: { type: Number, default: 0 },
    limit: { type: Number, default: 0 },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, default: 'student' },
    plan: { type: String, default: 'free' },
    planExpiry: { type: Date },
    monthlyUsage: { type: [usageSchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
