const requests = new Map();

export const rateLimiter = (req, res, next) => {
  const key = req.user?.userId || req.ip;
  const now = Date.now();
  const windowMs = 60 * 1000;
  const limit = 30;

  const entry = requests.get(key) || { count: 0, start: now };

  if (now - entry.start > windowMs) {
    requests.set(key, { count: 1, start: now });
    return next();
  }

  if (entry.count >= limit) {
    return res.status(429).json({ message: 'Too many requests. Please wait.' });
  }

  entry.count += 1;
  requests.set(key, entry);
  return next();
};
