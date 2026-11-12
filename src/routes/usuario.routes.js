
const express = require('express');
const router = express.Router();

const { cadastrar, listar, alterar, excluir, login } = require('../controllers/usuario.controllers');

router.post("/cadastrar", cadastrar);
router.get("/listar", listar);
router.put("/alterar/:id", alterar);
router.delete("/excluir/:id", excluir);
router.post("/login", login);

module.exports = router;