"use strict";

const { boat } = require("../../model");
const { promisify } = require("util");
const create = promisify(boat.create);
const read = promisify(boat.read);

module.exports = async function (fastify, _opts) {
  const { notFound } = fastify.httpErrors;

  fastify.post("/", async function (request, reply) {
    const { data } = request.body;

    try {
      const uid = boat.uid();
      const id = await create(uid, data);
      reply.status(201).send({ id });
    } catch (err) {
      console.log(err);
      throw err;
    }
  });

  fastify.get("/:id", async function (request, reply) {
    const { id } = request.params;

    try {
      return await read(id);
    } catch (err) {
      if (err.message === "not found") notFound();
      throw err;
    }
  });
};
