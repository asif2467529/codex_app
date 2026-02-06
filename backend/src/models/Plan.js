import mongoose from 'mongoose';

const planSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    durationInDays: { type: Number, required: true },
    featureLimits: {
      type: Map,
      of: Number,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.model('Plan', planSchema);
