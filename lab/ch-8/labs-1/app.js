"use strict";

const path = require("node:path");
const AutoLoad = require("@fastify/autoload");

const options = {};

const proxy = require("fastify-reply-from");

module.exports = async function (fastify, opts) {
  fastify.register(proxy);

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};

module.exports.options = options;
