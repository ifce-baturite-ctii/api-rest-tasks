const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Oi mundo');
})

app.listen(5555, ()=>{
    console.log('Executando servidor...');
})