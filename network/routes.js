const express = require("express");
const message = require("../components/message/network");
const user = require("../components/users/network");
const chat = require("../components/chat/network");

// console.log(message);

const routes = function (server) {
  server.use("/message", message);
  server.use("/user", user);
  server.use("/chat", chat);
};

module.exports = routes;
