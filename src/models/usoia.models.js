
const con = require('../config/db');

const cadastrar = async ({usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana}) => {
    const [resultado] = await con.query(
        "INSERT INTO usoia VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?);",
        [usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana]
    );
    return {
        id: resultado.insertId,
        usuarioId,
        sistema,
        tipo,
        finalidade,
        tecnologia,
        nivelRisco,
        revisaoHumana
    };
};

const listar = async () => {
    const [resultado] = await con.query(
        "SELECT id, usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana FROM usoia;"
    );

    return resultado;
};

const alterar = async (dados, id) => {
    const [resultado] = await con.query(
        "UPDATE usoia SET ? WHERE id = ?",
        [dados, id]
    );
    return resultado;
};

const excluir = async (id) => {
    const [resultado] = await con.query(
        "DELETE FROM usoia WHERE id = ?;",
        [id]
    );
    return resultado;
};

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir
};