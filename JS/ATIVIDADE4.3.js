let celular = {
    marca: "Fiat",
    modelo: "UNO",
    ano: 1995,
    valor: 6500
};

let acessorios = [
    "Ar-Condicionado",
    "Bancos de couro",
    "Travas"
];

function mostrarCarro(){
    console.log("Informações sobre o carro:");
    for(let i in carro){
        console.log(`${i}:${carro[i]}`);
    }
}

function mostrarAcessorios(){
    console.log("\nAcessórios do carro:")
    for(let i of acessorios){
        console.log(i);
    }
}

mostrarCarro();
mostrarAcessorios();
