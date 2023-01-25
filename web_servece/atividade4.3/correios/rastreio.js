const { rastrearEncomendas } = require('correios-brasil')

let  codRastreio = ['PW639018542BR', 'PW935793588BR'] // array de códigos de rastreios

rastrearEncomendas(codRastreio).then((response) => {
  console.log(response);
});
