const database = require('../models/database.js');

function listarTarefa(req, res) {
    return res.status(200).json(database.tasks.filter(tarefa => tarefa !== null));
}

function deletarTarefa(req, res) {
    const id_da_solicitacao = parseInt(req.params.id);
    const tarefa_a_ser_deletada = database.tasks.find(tarefa => tarefa.id===id_da_solicitacao);
    const posicao = database.tasks.indexOf(tarefa_a_ser_deletada);
    if (tarefa_a_ser_deletada) {
        delete database.tasks[posicao];
        res.status(200).send('tarefa deletada com sucesso');
    } else {
        res.status(402).send('tarefa não encontrada');
    }
}

function criarNovaTarefa(req, res) {
    const tarefa = req.body; // json.
    tarefa.id = database.proximo_id;
    database.proximo_id++;

    console.log(tarefa); // id, title, description;
    database.tasks.push(tarefa);

    res.status(201).send('tarefa criada');
}

module.exports = {
    criarNovaTarefa,
    deletarTarefa,
    listarTarefa
};