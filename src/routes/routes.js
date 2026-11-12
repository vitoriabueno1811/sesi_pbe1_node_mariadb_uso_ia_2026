
const express = require('express');
const router = express.Router();

const { cadastrar, listar, alterar, excluir, login } = require('../controllers/usuario.controllers');
const { cadastrar, listar, alterar, excluir } = require('../controllers/usoia.controllers');

router.post("/cadastrar", cadastrar);
router.get("/listar", listar);
router.put("/alterar/:id", alterar);
router.delete("/excluir/:id", excluir);
router.post("/login", login);

router.post("/cadastrar", cadastrar);
router.get("/listar", listar);
router.put("/alterar/:id", alterar);
router.delete("/excluir/:id", excluir);

module.exports = router;