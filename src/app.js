const express = require('express');

const app = express();

const passagerRouter = require('./routes/product.rout');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima

// Código que eu inseri
app.use(express.json());
app.use('/products', passagerRouter);
// você deve usar o arquivo index.js para executar sua aplicação !
module.exports = app;