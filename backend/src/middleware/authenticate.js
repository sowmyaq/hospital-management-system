import ApiError from '../utils/ApiError.js';
import { verifyAccessToken } from '../utils/auth.js';

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new ApiError(401, 'No token provided');
    }

    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    next(new ApiError(401, error.message || 'Invalid token'));
  }
};

export default authenticate;
