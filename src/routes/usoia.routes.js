
const express = require('express');
const router = express.Router();

const { cadastrar, listar, alterar, excluir } = require('../controllers/usoia.controllers');

router.post("/cadastrar", cadastrar);
router.get("/listar", listar);
router.put("/alterar/:id", alterar);
router.delete("/excluir/:id", excluir);

module.exports = router;