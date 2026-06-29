import ApiError from '../utils/ApiError.js';
import constants from '../constants/index.js';

const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        throw new ApiError(401, 'Not authenticated');
      }

      if (!allowedRoles.includes(req.user.role)) {
        throw new ApiError(403, 'Not authorized to access this resource');
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default authorize;
