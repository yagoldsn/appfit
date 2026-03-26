const express = require('express');
const app = express();

//parametros de configuração
app.use(express.json());

//rotas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//configurações de portas e inicialização do servidor
app.listen(3000, () => {
    console.log('Server rodando em http://localhost:3000');
});