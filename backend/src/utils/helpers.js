const generateUniqueId = (prefix) => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

const formatDate = (date) => {
  if (!date) return null;
  return new Date(date).toISOString().split('T')[0];
};

const formatDateTime = (date) => {
  if (!date) return null;
  return new Date(date).toLocaleString();
};

const calculateAge = (birthDate) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const getPaginationData = (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  return { skip, limit };
};

const generatePaginationInfo = (page, limit, total) => {
  const totalPages = Math.ceil(total / limit);
  return {
    page: parseInt(page),
    limit: parseInt(limit),
    total,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
};

export {
  generateUniqueId,
  formatDate,
  formatDateTime,
  calculateAge,
  getPaginationData,
  generatePaginationInfo,
};
