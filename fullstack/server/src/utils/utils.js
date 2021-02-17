const defined = (obj, _undefined) =>
  obj !== _undefined && obj != null && obj.toString().length > 0;
const isUndefined = (obj, _undefined) => obj == _undefined;

module.exports = {
  defined,
  isUndefined,
};
