const express = require("express");
const multer = require("multer");
const controller = require("./controller");
const router = express.Router();

const upload = multer({
  dest: "./public/files", //le digo donge guarde los archivos
});

const response = require("../../network/response");
router.get("/", function (req, res) {
  // console.log(req.body);
  // console.log(req.query);
  // console.log(req.headers);
  const filterMessages = req.query.chat|| null
  // console.log(req.params.idChat)
  controller
    .getMessages(filterMessages)
    .then((list) => {
      return response.success(req, res, list);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", e, 500);
    });
  // res.header({ "custon-header": "esto es una prueba" });
});

//upload, le digo con single que es un archivo y que se llama file
router.post("/", upload.single("file"), function (req, res) {
  // console.log(req.file)
  controller
    .addMessage(req.body.user, req.body.message, req.body.chat, req.file)
    .then((fullMessage) => {
      return response.success(req, res, fullMessage);
    })
    .catch(() => {
      return response.error(
        req,
        res,
        "ha ocurrido un error de lado del cliente",
        "Este es un error simulado"
      );
    });

  res.header({ "mi-header": "pureba" });
  // console.log(req.headers)
  // if (req.query.error === "ok") {
  // } else {
  // }
});

router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", e, 500);
    });
  // res.send("Ok");
});

router.delete("/:id", function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} eliminado`);
    })
    .catch((e) => response.error(req, res, "Error interno", 500, e));
});
module.exports = router;
