

let listaPecas = 3;
let peso = 150;
let nomePeca = "Cilindro mestre";

//Correção 1
if(peso >= 100){
    console.log("Peso permitido para cadastro");

    if(listaPecas >= 10){
console.log("Limite de Pecas Excedido");
    }

    if(nomePeca.length < 3){
        console.log("Nome Curto");
    }
} else{
    console.log("Peça não suficiente para cadastro")
}


//Correção 2
if(peso >= 100){
    console.log("Peso permitido para cadastro");
} else{
    console.log("Peça muito leve");
}

if(listaPecas >= 10){
    console.log("Lista cheia")
}

if(nomePeca.length < 3){
    console.log("Nome permitdo para cadastro.")
}

console.log("Cadastro realizado com Sucesso")