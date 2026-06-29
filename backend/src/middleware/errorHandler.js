import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';

const errorHandler = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    error = new ApiError(statusCode, message);
  }

  const response = new ApiResponse(
    error.statusCode,
    null,
    error.message
  );

  return res.status(error.statusCode).json(response);
};

export default errorHandler;
