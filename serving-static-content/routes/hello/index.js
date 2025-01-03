"use strict";

module.exports = async function (fastify, _opts) {
  fastify.get("/", (request, reply) => {
    reply.sendFile('hello.html')
  });
};
