const usuarioModel= require('../models/usuario.models');

const cadastrar = async (req, res) => {
    try {
        const usuario = await usuarioModel.cadastrar(req.body);

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listar = async (req, res) => {
    try {
        const resposta = await usuarioModel.listar();

        res.status(200).json(resposta).end();
    } catch (error) {
        res.status(500).json({ error: error.message }).end();
    }
};

const alterar = async (req, res) => {
    try {
        const resposta = await usuarioModel.alterar(req.body, req.params.id);

 if (resposta.affectedRows == 1) {
    res.status(200).json({ mensagem: "Usuário alterado com sucesso!" });
} else {
    res.status(404).json({ error: "Usuario não encontrado" });
}
    } catch (error) {
        res.status(500).json({ error: error.message }).end();
    }
};

const excluir = async (req, res) => {
    try {
        const resposta = await usuarioModel.excluir(req.params.id);

        if (resposta.affectedRows == 1) {
            res.status(200).end();
        } else {
            res.status(404).json({ error: "Usuario não encontrado" }).end();
        }
    } catch (error) {
        res.status(500).json({ error: error.message }).end();
    }
};

const login = async (req, res) => {
    try {
        const usuario = await usuarioModel.login(req.body);

        if (usuario) {
            res.status(200).json({
                message: "Login realizado com sucesso",
                usuario
            });
        } else {
            res.status(401).json({ error: "E-mail ou senha inválidos" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir,
    login
};