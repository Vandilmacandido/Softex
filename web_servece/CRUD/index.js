const express = require('espress');

const server = express();

server.use(express.json());

const celular = ['Lenovo', 'LG', 'Samsung', 'Iphone']

//Retorna uma marca de celular

server.get('/celular/index', (req,res) => {
    const { index } = req.params;

    return res.json(celular[index]);
});

//Retornar todos os celulares 

server.get('/celular', (req,res) => {
    return res.json(celular)
});

// Criar um novo repositorio de celular

server.post('/celular', (req,res) => {
    const {name} = req.body;
    celular.push (name);

    return res.json(celular)   
});

// Atualizar repositorio de celular

server.put('/celular/:index', (req,res) =>{
    const { index } = req.params;
    const { name } = req.body;

    celular[index] = name;

    return res.json(celular)
});

//Deletar um repositorio de celular

server.delete('/celular/:index', (req,res) =>{
    const { index } = req.params;

    celular.splice(index, 1);

    return res.json({message:"O repositorio dessa marca de celular foi deletado"});
});


server.listen(3000);