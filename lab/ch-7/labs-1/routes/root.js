"use strict";

const { BOAT_SERVICE_PORT, BRAND_SERVICE_PORT } = process.env;

const boatSrv = `http://localhost:${BOAT_SERVICE_PORT}`;
const brandSrv = `http://localhost:${BRAND_SERVICE_PORT}`;

module.exports = async function (fastify, opts) {
  fastify.get("/:id", async function (request, reply) {
    const { id } = request.params;

    const signal = AbortSignal.timeout(3000);
    const boatReq = await fetch(`${boatSrv}/${id}`, { signal });

    if (!boatReq.ok) {
      if (boatReq.status === 404) throw fastify.httpErrors.notFound();
      if (boatReq.status === 400) throw fastify.httpErrors.badRequest();
      throw fastify.httpErrors.internalServerError();
    }

    const boatJson = await boatReq.json();

    const brandReq = await fetch(`${brandSrv}/${boatJson.brand}`, { signal });

    if (!brandReq.ok) {
      if (brandReq.status === 404) throw fastify.httpErrors.notFound();
      if (brandReq.status === 400) throw fastify.httpErrors.badRequest();
      throw fastify.httpErrors.internalServerError();
    }

    const brandJson = await brandReq.json();

    reply.send({
      id: boatJson?.id,
      color: boatJson?.color,
      brand: brandJson?.name,
    });
  });
};
