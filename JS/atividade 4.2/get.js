import express from 'express';
import { request } from 'http';

const app = express();

app.get('/teste', (request, response) => {
    response.send('GET -----------> Ola Mundo!')
});

app.listen(3000, () => {console.log('sevidor iniciado')});
