// Middleware to restrict webpage access
// to unauthenticated users
const requireUser = (req, res, next) => {
  const username = req.session.username;
  if (!username) return res.sendStatus(403);

  return next();
};

module.exports = { requireUser };
