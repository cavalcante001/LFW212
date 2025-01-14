Existem tres abordagens para trabalhar com promises baseadas em callback

a primeira é não utilizar async

a segunda é utilizar async e retornar await reply para evitar erro no fastify

a terceira é usar o promisify

`const { promisify } = require('util')`

`const read = promisify(bicycle.read)`