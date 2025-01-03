'use strict'

module.exports = async function (fastify, _opts) {
  fastify.get('/', async function (_request, reply) {
    return reply.view('index.hbs')
  })
}
