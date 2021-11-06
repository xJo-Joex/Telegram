const express = require("express");
const controller = require("./controller");
const router = express.Router();
const response = require("../../network/response");

router.post("/", function (req, res) {
  controller
    .addUser(req.body.name)
    .then((dataUser) => {
      response.success(req, res, dataUser);
    })
    .catch((e) => {
      response.error(req, res, "ha ocurrido un error", e, 500);
    });
});

router.get("/", function (req, res) {
  controller
    .getUsers(req.query.user || null)
    .then((users) => {
      response.success(req, res, users);
    })
    .catch((e) => {
      response.error(req, res, "Error en el server", e, 500);
    });
});

module.exports = router;
