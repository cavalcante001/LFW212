"use strict";
const data = require("../data");

module.exports = async function (fastify, _opts) {
  fastify.get("/", async function (_request, reply) {
    const result = await data()
    reply.send(result)
  });
};
