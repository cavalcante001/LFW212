"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const { url } = request.query;

    try {
      new URL(url);
      return reply.from(url);
    } catch (err) {
      throw fastify.httpErrors.badRequest();
    }
  });
};
