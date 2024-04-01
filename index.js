const express = require('express');
const taskRouter = require('./src/routes/tasks.js');

const app = express();
app.use(express.json());
app.use('/',taskRouter);

app.listen(5555, ()=>{
    console.log('Executando servidor...');
})