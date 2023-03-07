module.exports = (asyEr) => (req, res, next) => {
  Promise.resolve(asyEr(req, res, next)).catch(next);
};
