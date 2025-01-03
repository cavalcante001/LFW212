'use strict'

module.exports = async function (fastify, _opts) {
  fastify.get('/', async function (request, reply) {
    const { desenvolvedor = 'Paulo Gomes' } =  request.query
    return reply.view('index.hbs', {desenvolvedor})
  })
}
