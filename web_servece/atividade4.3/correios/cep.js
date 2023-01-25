const { consultarCep } = require("correios-brasil");

// Cep pode ser String ou Number
const cep = "21770200";

consultarCep(cep).then((response) => {
  console.log(response);
});
