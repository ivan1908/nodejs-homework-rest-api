const HandleMongooseError = (error, data, next) => {
  const { code, name } = error;
  const status = name === 'MongoServerError' && code === 11000 ? 409 : 400;
  error.status = 400;
  next();
};

module.exports = HandleMongooseError;