"use strict";

const fp = require("fastify-plugin");

const replyFrom = require("@fastify/reply-from");

module.exports = fp(async function (fastify, opts) {
  fastify.register(replyFrom, {
    errorHandler: false,
  });
});
