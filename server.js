// Arquivo: server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

app.use(cors());
app.use(express.json());

// Importar rotas
const usuarioRoutes = require('./src/routes/usuario.routes');
const usoiaRoutes = require('./src/routes/usoia.routes');

app.use('/usuario', usuarioRoutes);
app.use('/usoia', usoiaRoutes);

app.listen(3000, () => {
    console.log('Servidor online!');
});

const con = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usos_ia'
});

module.exports = con;