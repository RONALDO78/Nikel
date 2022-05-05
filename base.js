const nome = "Ronaldo Leite";
let nome2 = "";
let pessoaDefault = {
    nome: "Ronaldo Leite",
    idade: "43",
    trabalho: "Programador"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"];
let pessoas = [];

function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor Alterado:");
    console.log("nome2");
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log(pessoa);

    console.log("nome:");
    console.log(pessoa.nome);

    console.log("idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//    nome: "Maria Silva",
//    idade: "25",
//    trabalho: "UX/UI Designer"
// });

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();


