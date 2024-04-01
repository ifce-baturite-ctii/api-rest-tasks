const express = require('express');

const app = express();
app.use(express.json());

const database = {
    proximo_id : 2,
    tasks: [
    {
        id: 1,
        title: "Tarefa inicial",
        description: "Faremos nossa primeira implementação"
    }
    ]
};

app.get('/tasks', (req, res) => {
    res.status(200).json(database.tasks.filter(tarefa => tarefa !== null));
});

app.post('/tasks', (req, res) => {
    const tarefa = req.body; // json.
    tarefa.id = database.proximo_id;
    database.proximo_id++;

    console.log(tarefa); // id, title, description;
    database.tasks.push(tarefa);

    res.status(201).send('tarefa criada');
});

app.delete('/tasks/:id', (req, res) => {
    const id_da_solicitacao = parseInt(req.params.id);
    const tarefa_a_ser_deletada = database.tasks.find(tarefa => tarefa.id===id_da_solicitacao);
    const posicao = database.tasks.indexOf(tarefa_a_ser_deletada);
    if (tarefa_a_ser_deletada) {
        delete database.tasks[posicao];
        res.status(200).send('tarefa deletada com sucesso');
    } else {
        res.status(402).send('tarefa não encontrada');
    }
});


app.listen(5555, ()=>{
    console.log('Executando servidor...');
})