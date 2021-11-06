const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});
//ojito con parametros en este método no funciono
router.get("/:userId", function(req, res) {
/*    console.log(req.params.name) */
    controller.listChats(req.params.userId || null)
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

module.exports = router;


/* const express = require("express");
const controller = require("./controller");
const router = express.Router();

const response = require("../../network/response");

router.post("/", function (req, res) {
  controller
    .addChat(req.body.users)
    .then((dataChat) => response.success(req, res, dataChat))
    .catch((error) => response.error(req, res, "Internal error", error, 500));
});

router.get("/:userId", function (req, res) {
  controller
    .getChat(req.params.userId || null)
    .then((chats) => {
      response.success(req, res, chats);
    })
    .catch((error) => {
      response.error(req, res, "ha ocurrido un error", error, 500);
    });
});

module.exports = router; */
