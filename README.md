# LFW212
Curso LFW212 para certificação OpenJS Node.js Services Developer

node -e "console.log('Olá, mundo!)"
o -e significa evaluete, significa que o Node.js irá avaliar e executar o código fornecido como argumento diretamente no terminal.

Cria um diretório chamado fastify-web-server    
`node -e "fs.mkdirSync('fastify-web-server')"`


`npm init fastify`

Renomeia a pasta examples para hello
`cd routes`
`node -e "fs.renameSync('example', 'hello')"`


verifica se o servidor está escutando na porta especificada na variável de ambiente PORT e se o npm start irá iniciar o servidor corretamente
`npx nsd-check`

Esse comando irá criar um novo projeto fastify atualizando o package.json se existente
`npm init fastify -- --integrate`