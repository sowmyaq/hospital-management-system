import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcryptjs.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE || '30d',
  });
};

const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw error;
  }
};

const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  } catch (error) {
    throw error;
  }
};

export {
  hashPassword,
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
