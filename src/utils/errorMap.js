const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  NAME_NOT_INSERTED: 400,
  MIN_LENGTH: 422,
  NOT_INSERTED: 400,
  MIN_VALUE: 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = mapError;
