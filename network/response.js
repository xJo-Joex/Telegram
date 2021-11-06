// const statusMessages = {
//   200: "Done",
//   201: "Created",
//   400: "Invalid format",
//   500: "Internal error",
// };

exports.success = function (req, res, message) {
  // let statusCode = status;
  // let statusMessage = message;

  // if (!status) {
  //   status = 200;
  // }
  // if (!message) {
  //   statusMessage = statusMessages[status];
  // }
  res.status(200).send({
    body: message,
    error: "",
  });
  // console.log(message);
  // console.log(req.query);
};
exports.error = function (req, res, message, details, status) {
  //   console.log(`[response error] ${details}`);
  res.status(status || 403).send({
    error: message,
    body: "",
  });
};
