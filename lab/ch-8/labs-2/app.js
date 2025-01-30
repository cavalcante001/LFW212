"use strict";

const path = require("node:path");
const AutoLoad = require("@fastify/autoload");

// Pass --options via CLI arguments in command to enable these options.
const options = {};

module.exports = async function (fastify, opts) {
  fastify.register(require("@fastify/http-proxy"), {
    upstream: "https://jsonplaceholder.typicode.com/",
  });
};

module.exports.options = options;
