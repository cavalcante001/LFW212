A diferença de renderizar um conteúdo estático utilizando o plugin @fastify/static é que o @fastify/static irá carregar o public/index.html ao invés de nós definirmos uma rota manualmente e enviarmos o conteúdo.

O módulo @fastity/static também decora o objeto reply com o método sendFile. Nós podemos usar isso para criar uma rota que manualmente responde com o conteúdo do hello.html.

