const User = require('../models/User');

const verifyToken = async (req, res, next) => {
  try {
    const user = await User.verify(req.cookies.session);
    req.user = user;
    next();
  } catch (err) {
    err.status = 401;
    next(err);
  }
};

module.exports = verifyToken;
