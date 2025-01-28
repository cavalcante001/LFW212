"use strict";

const { boat } = require("../../model");
const { promisify } = require("util");

const del = promisify(boat.del);
const read = promisify(boat.read);

module.exports = async function (fastify, opts) {
  const { notFound } = fastify.httpErrors;

  fastify.get("/:id", async function (request, reply) {
    const { id } = request.params;

    try {
      const data = await read(id);
      return data;
    } catch (err) {
      if (err.message === "not found") throw notFound();
      throw err;
    }
  });

  fastify.delete("/:id", async function (request, reply) {
    const { id } = request.params;

    try {
      await del(id);
      return reply.status(204).send();
    } catch (err) {
      if (err.message === "not found") throw notFound();
      throw err;
    }
  });
};
