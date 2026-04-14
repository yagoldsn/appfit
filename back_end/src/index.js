const express = require('express');
const app = express();
const sql = require('../config/db');
// const pool = require('../config/db');

//parametros de configuração
app.use(express.json());

//rotas
app.get('/', (req, res) => {
});



//configurações de portas e inicialização do servidor
app.listen(4000, () => {
    console.log('Server rodando em http://localhost:4000');
});