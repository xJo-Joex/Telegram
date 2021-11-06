exports.success = function (req, res, message) {
  res.send({
    "body":message,
    "error": ""
  });
  // console.log(message);
  // console.log(req.query);
};
exports.error = function (req, res, message, details, status) {
  //   console.log(`[response error] ${details}`);
  res.status(status || 403).send({
    error: message,
    body: ""
  });
};
