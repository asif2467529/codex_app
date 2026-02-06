import User from '../models/User.js';

export const subscriptionCheck = (featureKey) => async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (user.planExpiry && new Date(user.planExpiry) < new Date()) {
      return res.status(403).json({ message: 'Subscription expired.' });
    }

    const usage = user.monthlyUsage.find((entry) => entry.featureKey === featureKey);

    if (usage && usage.limit > 0 && usage.count >= usage.limit) {
      return res.status(429).json({ message: 'Feature usage limit reached.' });
    }

    if (usage) {
      usage.count += 1;
    } else {
      user.monthlyUsage.push({ featureKey, count: 1, limit: 0 });
    }

    await user.save();
    req.subscription = { plan: user.plan, planExpiry: user.planExpiry };
    return next();
  } catch (error) {
    return next(error);
  }
};
