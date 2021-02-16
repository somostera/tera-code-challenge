const ModelMiddleware = async (req, res, next) => {
  console.log(res);
  try {
    next();
  } catch (error) {}
};

module.exports = ModelMiddleware;
