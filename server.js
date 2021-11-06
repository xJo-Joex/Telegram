const express = require("express");
const app = express();
const server = require("http").Server(app);

const config = require("./config");
const cors = require("cors");
//modulo de express para trabajar con el body de la peticion de manera sencilla
const bodyParser = require("body-parser");
// const { urlencoded } = require("body-parser"); //esta linea ya esta en deshuso

const socket = require("./socket");
// const router = require("./components/message/network");
const router = require("./network/routes");
//funcion para la coneccion con la base de datos
const db = require("./db");

db(config.dbUrl);

app.use(cors());
// app.use(bodyParser.json());//esta linea esta en deshuso.
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(router);
socket.connect(server);
//paso mi servidor al socket
// socket.connect(server);
router(app);
// app.use('/', function(req, res){
//     res.send('hola');
// });

//para servir estaticos
app.use(config.publicRoute, express.static("public"));

server.listen(config.port, () => {
  console.log("estoy escuchando");
});
console.log(
  `la aplicacion esta escuchando en el ${config.host}:${config.port}`
);
