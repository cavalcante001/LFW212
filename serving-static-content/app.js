"use strict";

const path = require("node:path");
const AutoLoad = require("@fastify/autoload");

const dev = process.env.NODE_ENV !== "production";
const fastifyStatic = dev && require("@fastify/static");

const options = {};

module.exports = async function (fastify, opts) {
  if (dev) {
    fastify.register(fastifyStatic, {
      root: path.join(__dirname, "public"),
    });
  }

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
