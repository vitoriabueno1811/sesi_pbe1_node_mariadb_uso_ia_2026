
const usoiaModel= require('../models/usoia.models');

const cadastrar = async (req, res) => {
    try {
        const usoia = await usoiaModel.cadastrar(req.body);

        res.status(201).json(usoia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listar = async (req, res) => {
    try {
        const resposta = await usoiaModel.listar();

        res.status(200).json(resposta).end();
    } catch (error) {
        res.status(500).json({ error: error.message }).end();
    }
};

const alterar = async (req, res) => {
    try {
        const resposta = await usoiaModel.alterar(req.body, req.params.id);

        if (resposta.affectedRows == 1) {
            res.status(200).json({ mensagem: "Usoia alterado com sucesso!" }).end();
        } else {
            res.status(404).json({ error: "Usoia não encontrado" }).end();
        }
    } catch (error) {
        res.status(500).json({ error: error.message }).end();
    }
};

const excluir = async (req, res) => {
    try {
        const resposta = await usoiaModel.excluir(req.params.id);

        if (resposta.affectedRows == 1) {
            res.status(200).json({ mensagem: "Usoia excluído com sucesso!" }).end();
        } else {
            res.status(404).json({ error: "Usoia não encontrado" }).end();
        }
    } catch (error) {
        res.status(500).json({ error: error.message }).end();
    }
};

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir
};