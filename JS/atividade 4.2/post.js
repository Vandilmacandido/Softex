import express from 'express';
import { request } from 'http';

const app = express();

app.post('/teste', (request, response) => {
    response.send('POST -----------> Ola Mundo!')
});

app.listen(3000, () => {console.log('sevidor iniciado')});
