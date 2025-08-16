"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
exports.exibirDetalhes = exibirDetalhes;
// Type Guard no Typescript é uma técnica que permite verificar o tipo de uma variável em tempo de execução, 
// garantindo que ela seja do tipo esperado antes de realizar operações com ela.
// Isso é especialmente útil quando se trabalha com tipos complexos ou union types, onde uma variável pode ter mais de um tipo possível.
// Exemplo de uso do Type Guard:
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos.");
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
// A função exibirDetalhes recebe um parâmetro que pode ser do tipo Pessoa ou Produto e exibe detalhes de acordo com o tipo.
// Ela utiliza o Type Guard para verificar se o parâmetro é do tipo Pessoa ou Produto,
// garantindo que as propriedades corretas sejam acessadas sem causar erros em tempo de execução.
// Isso ajuda a evitar erros de tipo e torna o código mais seguro e fácil de entender.
// Type Guard é uma técnica poderosa que melhora a segurança de tipos em tempo de execução,
function exibirDetalhes(pessoa) {
    if ("idade" in pessoa) {
        // Verifica se a propriedade 'idade' existe, indicando que é do tipo Pessoa
        console.log("Pessoa: ".concat(pessoa.nome, ", Idade: ").concat(pessoa.idade));
    }
    else {
        // Caso contrário, é do tipo Produto
        console.log("Produto: ".concat(pessoa.nome, ", Pre\u00E7o: ").concat(pessoa.preco));
    }
}
var pessoa = new Pessoa("João", 30);
var produto = {
    nome: "Smartphone",
    preco: 1999.99,
    id: 1,
    categoria: "Eletrônicos",
    tags: ["Android", "5G", "128GB"],
};
exibirDetalhes(pessoa); // Exibe detalhes da pessoa
exibirDetalhes(produto); // Exibe detalhes do produto   
