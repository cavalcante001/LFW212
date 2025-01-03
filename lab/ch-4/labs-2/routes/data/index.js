"use strict";

const stream = require('../../stream')

module.exports = async function (fastify, _opts) {
  fastify.get("/", async function (_request, _reply) {
    return stream();
  });
};
