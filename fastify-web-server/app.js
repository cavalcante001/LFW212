"use strict";

const path = require("node:path");
const AutoLoad = require("@fastify/autoload");

const options = {};

module.exports = async function (fastify, opts) {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });

  fastify.setNotFoundHandler((request, reply) => {
    if (request.method !== "GET") {
      reply.status(405);
      return "Method not Allowed\n";
    }
    return "Not Found\n";
  });
};

module.exports.options = options;
